import React from 'react';
import {db} from "../../../../../firebase/firebase";

export const recentList = [
	{
		image: 'assignment',
		title: "Physics",
		description: "Study uniform circular motion, focusing on work as a function of time",
		date: "20 March, 2017",
		color: "bg-primary"
	},
	{
		image: 'assignment-o',
		title: "Android app launched",
		description: "Chat project’s new Android app is launched.",
		date: "27 Feb, 2017",
		color: "bg-danger"
	},
	{
		image: 'assignment',
		title: "PSD file added to dropbox",
		description: "There are many variations of PSDs available.",
		date: "24 Feb, 2017",
		color: "bg-info"
	},

];

export const projects = [
  {
    id: 1,
    name: "Jambo Admin",
    date: "Oct 21",
    status: "Completed",
    color: "success",
    progressValue:98,
    teamList: [
      {id: 1, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 2, image:  'https://via.placeholder.com/150x150', name: ''},
      {id: 3, image:  'https://via.placeholder.com/150x150', name: ''},
      {id: 4, image:  'https://via.placeholder.com/150x150', name: ''},
    ]
  },
  {
    id: 2,
    name: 'Chatbull',
    date: "Oct 22",
    status: "On Hold",
    color: "warning",
    progressValue:70,
    teamList: [
      {id: 5, image:  'https://via.placeholder.com/150x150', name: ''},
      {id: 6, image:  'https://via.placeholder.com/150x150', name: ''},
      {id: 7, image:  'https://via.placeholder.com/150x150', name: ''},
      {id: 8, image:  'https://via.placeholder.com/150x150', name: ''},
    ]
  },
  {
    id: 3,
    name: 'Mouldifi',
    date: "Nov 12",
    status: "Delayed",
    color: "info",
    progressValue:40,
    teamList: [
      {id: 9, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 10, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 11, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 12, image: 'https://via.placeholder.com/150x150', name: ''},
    ]
  },
  {
    id: 4,
    name: 'Simplify Timer',
    date: "Nov 21",
    status: "Completed",
    color: "success",
    progressValue:98,
    teamList: [
      {id: 13, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 14, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 15, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 16, image: 'https://via.placeholder.com/150x150', name: ''},
    ]
  },
  {
    id: 5,
    name: 'Clevex',
    date: "Aug 21",
    status: "Cancelled",
    color: "danger",
    progressValue:38,
    teamList: [
      {id: 17, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 18, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 19, image: "https://via.placeholder.com/150x150", name: ''},
      {id: 20, image: 'https://via.placeholder.com/150x150', name: ''},
    ]
  },
  {
    id: 6,
    name: 'Simplify Timer',
    date: "Dec 12",
    status: "Completed",
    color: "success",
    progressValue:24,
    teamList: [
      {id: 21, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 22, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 23, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 24, image: 'https://via.placeholder.com/150x150', name: ''},
    ]
  },
  {
    id: 7,
    name: "Clevex",
    date: "Sep 15",
    status: "Cancelled",
    color: "danger",
    progressValue:24,
    teamList: [
      {id: 25, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 26, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 27, image: 'https://via.placeholder.com/150x150', name: ''},
      {id: 28, image: 'https://via.placeholder.com/150x150', name: ''},
    ]
  },
];

export const dailyFeedData = [

  {
    id: 1,
    desc: [<span className="jr-link" key={1}>Guptil</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={2}>Mouldifi</span>],
    image: 'https://via.placeholder.com/150x150',
    time: "Today 06:30 pm - 12.10.17",
    updateTime: "5m ago"
  },
  {
    id: 2,
    desc: [<span className="jr-link" key={3}>Mich</span>, " uploaded 6 new photos in ",
      <span className="jr-link" key={4}>Art Lovers</span>, " group"],
    image: "https://via.placeholder.com/150x150",
    time: "Today 06:30 pm - 12.10.17",
    updateTime: "3m ago"
  }, {
    id: 3,
    desc: [<span className="jr-link" key={5}>Joshua</span>, ' has shared a post saying "This is bigening."'],
    image: 'https://via.placeholder.com/150x150',
    time: "Today 06:30 pm - 12.10.17",
    updateTime: "1 day ago",
    isSocial: "true"
  },{
    id: 4,
    desc: ['Artist of the month', <span className="jr-link" key={6}>Domnic Harris awarded</span>, 'today.'],
    image: 'https://via.placeholder.com/150x150',
    time: "Today 06:30 pm - 12.10.17",
    updateTime: "2 day ago",
  },

];

export const products = [
  {
    image: 'https://via.placeholder.com/600x400',
    title: "Creactive watch",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    mrp: 250,
    offerPrice: 200
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: "Headphone",
    description: "It is a long established fact that a reader will be distracted",
    mrp: 750,
    offerPrice: 700
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: "Speaker",
    description: "There are many variations of passages of Lorem Ipsum available",
    mrp: 650,
    offerPrice: 300
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: "T-shirt",
    description: "The standard chunk of Lorem Ipsum used since the 1500s",
    mrp: 250,
    offerPrice: 100
  },{
    image: 'https://via.placeholder.com/600x400',
    title: "Laptop",
    description: "There are many variations of passages of Lorem Ipsum available",
    mrp: 35550,
    offerPrice: 30000
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: "Football",
    description: "The standard chunk of Lorem Ipsum used since the 1500s",
    mrp: 800,
    offerPrice: 450
  },
];

export const appNotification = [

  {
    id: 1,
    title: "Invitation",
    desc: [<span className="jr-link" key={1}>Stella</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={2}>Mouldifi</span>],
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 2,
    title: "Message",
    desc: [<span className="jr-link" key={3}>Jeson Born</span>, " Need your help on ",
      <span className="jr-link" key={4}>Jambo</span>],
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 3,
    title: "Invitation",
    desc: [<span className="jr-link" key={5}>Guptil</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={6}>Mouldifi</span>],
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 4,
    title: "Invitation",
    desc: [<span className="jr-link" key={7}>Alex Dolgove</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={8}>Mouldifi</span>],
    image: 'https://via.placeholder.com/150x150'
  },
];

export const announcementsNotification = [
  {
    id: 5,
    title: "Invitation",
    desc: [<span className="jr-link" key={9}>Alex Dolgove</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={10}>Mouldifi</span>],
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 6,
    title: "Message",
    desc: [<span className="jr-link" key={11}>Jeson Born</span>, " Need your help on ",
      <span className="jr-link" key={12}>Jambo</span>],
    image: 'https://via.placeholder.com/150x150'
  }, {
    id: 7,
    title: "Invitation",
    desc: [<span className="jr-link" key={13}>Stella</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={14}>Mouldifi</span>],
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 8,
    title: "Invitation",
    desc: [<span className="jr-link" key={15}>Guptil</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={16}>Mouldifi</span>],
    image:'https://via.placeholder.com/150x150'
  },
];

export const marketingData = [
  {
    id: 1,
    name: 'Facebook Ads',
    desc: '63 Likes, 387 Shares',
    icon: 'facebook',
    color: 'bg-indigo lighten-1',
    budget: 570,
    growth: 20
  },

  {
    id: 2,
    name: 'Twitter Ads',
    desc: '43 Likes, 545 Shares',
    icon: 'twitter',
    color: 'bg-light-blue accent-2',
    budget: 811,
    growth: -5
  },

  {
    id: 3,
    name: 'Instagram',
    desc: '83 Follows, 210 Likes',
    icon: 'instagram',
    color: 'bg-pink',
    budget: 685,
    growth: 20
  },

];

export const weeklyData = [
  {
    id: 1,
    projectName: 'Jumbo Admin',
    color: 'bg-indigo lighten-1',
    sales:'250',
    growth: 20,
    income: 1800,
  },{
    id: 2,
    projectName: 'Chatbull',
    color: 'bg-indigo lighten-1',
    sales:'136',
    growth: 136,
    income: 800,
  },{
    id: 3,
    projectName: 'Mouldifi',
    color: 'bg-indigo lighten-1',
    growth: 23,
    sales:'155',
    income: 950,
  },{
    id: 4,
    projectName: 'Jumbo Admin',
    color: 'bg-indigo lighten-1',
    growth: -2,
    sales:'750',
    income: 3200,
  },
];

export const todoData = [
  {
    'id': 1,
    'notes': 'Create wireframes for Mouldifi',
    'selected': false,
  },
  {
    'id': 2,
    'notes': 'Design PSD files for Jambo',
    'selected': true,
  },
  {
    'id': 3,
    'notes': 'Bring the latest idea to the digital paper and send this for the selection.',
    'selected': false,
  },
  {
    'id': 4,
    'notes': 'Deploy existing code to drift.com',
    'selected': false,
  },
  {
    'id': 5,
    'notes': 'New logo design for Mouldifi',
    'selected': true,
  },
];

export const chartData = [
  {name: '6.00', uv: 300, pv: 400,cv:600, amt: 20},
  {name: '7.00', uv: 600, pv: 1100,cv:1300, amt: 21},
  {name: '8.00', uv: 400, pv: 700,cv:1000, amt: 29},
  {name: '9.00', uv: 700, pv: 1200,cv:1400, amt: 30},
];