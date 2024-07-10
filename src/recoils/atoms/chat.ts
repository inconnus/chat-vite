import { atom } from 'recoil';
export const lastChatState = atom({
    key: 'lastChatState',
    default: [
        { userId: '01F8MECHZX3TBDSZ7XRADM79XV', name: 'John Doe', message: 'Hello!', time: '10:00', tags: ['urgent'], profile: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79XW', name: 'Jane Smith', message: 'How are you?', time: '10:05', tags: ['important'], profile: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79XX', name: 'Alice Johnson', message: 'Meeting at 3 PM', time: '10:10', tags: ['meeting'], profile: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79XY', name: 'Bob Brown', message: 'Project update', time: '10:15', tags: ['work'], profile: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79XZ', name: 'Charlie Davis', message: 'Lunch?', time: '10:20', tags: ['casual'], profile: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y0', name: 'Diana Evans', message: 'Check this out', time: '10:25', tags: ['info'], profile: 'https://randomuser.me/api/portraits/women/3.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y1', name: 'Eve Foster', message: 'Good morning', time: '10:30', tags: ['greeting'], profile: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y2', name: 'Frank Green', message: 'Can you help?', time: '10:35', tags: ['help'], profile: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y3', name: 'Grace Harris', message: 'See you soon', time: '10:40', tags: ['farewell'], profile: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y4', name: 'Hank Irving', message: 'Got it', time: '10:45', tags: ['acknowledgment'], profile: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y5', name: 'Ivy Johnson', message: 'Thanks!', time: '10:50', tags: ['gratitude'], profile: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y6', name: 'Jack King', message: 'No problem', time: '10:55', tags: ['response'], profile: 'https://randomuser.me/api/portraits/men/6.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y7', name: 'Karen Lee', message: 'Let\'s do it', time: '11:00', tags: ['agreement'], profile: 'https://randomuser.me/api/portraits/women/7.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y8', name: 'Leo Martin', message: 'I\'ll be there', time: '11:05', tags: ['confirmation'], profile: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { userId: '01F8MECHZX3TBDSZ7XRADM79Y9', name: 'Mona Nelson', message: 'What\'s up?', time: '11:10', tags: ['casual'], profile: 'https://randomuser.me/api/portraits/women/8.jpg' }
    ],
});