import React, { useState,useEffect } from 'react'
import client, {databases, DATABASE_ID, COLLECTION_ID_COMMENTS} from '../lib/appwrite'
import {ID, Query,Permission, Role} from 'appwrite'
import {useAuth} from '../context/Authcontext1';
import { Trash2 } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Strategyroom = () => {
    const[messagebody, setMessageBody] = useState('');
    const[messages , setMessages] = useState([]);
    const {user} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
      getMessages();
      const unsubscribe = client.subscribe(
        `databases.${DATABASE_ID}.collections.${COLLECTION_ID_COMMENTS}.documents`, // fixed 'collections'
        response => {
          if (response.events.includes("databases.*.collections.*.documents.*.create")) {
            console.log('A MESSAGE WAS CREATED')
            getMessages(); 
          }
          if (response.events.includes("databases.*.collections.*.documents.*.delete")) {
            console.log('A MESSAGE WAS DELETED!!!')
            getMessages(); 
          }
        }
      );

      console.log('unsubscribe:' , unsubscribe);

      return () => {
        unsubscribe();
      }
      
    },[]);


    const getMessages = async() => {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_COMMENTS,
        [
          Query.orderDesc('$createdAt'),
          Query.limit(100)
        ]
      )
      console.log(response.documents);
      setMessages(response.documents);
      
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Message: ", messagebody);

      const permissions = [
        Permission.write(Role.user(user.$id)),

      ]
      const payload = {

        user_id: user.$id,
        username: user.name,
        body: messagebody
      }

      const response = await databases.createDocument(
          DATABASE_ID, 
                COLLECTION_ID_COMMENTS, 
                ID.unique(), 
                payload,
                permissions
      )
       console.log('RESPONSE:', response)
        setMessageBody('')
        getMessages(); // Refresh messages after sending

    }
    const deleteMessage = async(id) => {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID_COMMENTS, id);
      getMessages(); // Refresh messages after deleting
    } 
    
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header with back and home buttons */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/character')}
            className="flex items-center gap-1 text-blue-400 hover:text-blue-200 font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-green-400 hover:text-green-200 font-semibold transition ml-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
            </svg>
            Home
          </button>
        </div>
        <span className="text-lg font-bold tracking-wide">Strategy Room</span>
        <span></span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.$id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
              className={`flex items-start gap-3 p-3 rounded-lg shadow-md bg-gray-800 relative group`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold">
                {message.username ? message.username[0].toUpperCase() : '?'}
              </div>
              <div className="flex-1">
                <div className="font-semibold">{message.username || 'Unknown'}</div>
                <div className="text-sm text-gray-300 break-words">{message.body}</div>
              </div>
              {user && user.$id === message.user_id && (
                <button
                  className="ml-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
                  onClick={() => deleteMessage(message.$id)}
                  title="Delete message"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center p-4 border-t border-gray-700 bg-gray-800"
      >
        <input
          type="text"
          className="flex-1 rounded-lg px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={messagebody}
          onChange={e => setMessageBody(e.target.value)}
          required
        />
        <button
          type="submit"
          className="ml-3 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Strategyroom