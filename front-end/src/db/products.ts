const products = [
  {
    _id: Date.now().toString(),
    name: "Improve Your Sex Life with Semen Retension",
    category: "Sex Education",
    price: 1597.0,
    originalprice: 4097.99,
    rating: 5,
    seller: "TypeScript Nĩgga",
    courseimg:
      "https://images.unsplash.com/photo-1570964251517-9e3442ffe368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    avatar:
      "https://images.unsplash.com/photo-1582944682271-172a57ce4b52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details:
      "Improve your life through and semen retension, I will teach you the ways.",
    fineprint: "Up",
  },
  {
    _id: Date.now().toString(),
    name: "Kylie Jenner: How To Scam Your Audience",
    avatar:
      "https://pbs.twimg.com/profile_images/1336735451793641474/IZa-YpdP_400x400.jpg",
    category: "Beauty",
    originalprice: 150000,
    price: 1500000,
    rating: 5,
    seller: "Kylie Jenner",
    courseimg:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    details:
      "If You Want To Learn How To Manipulate Your Audience Into Buying Dumb Shit, You Are In The Right Place",
    fineprint:
      "I Was Born Into Extreme Fame And Wealth. My Tactics May Not Work For You",
  },
  {
    _id: Date.now().toString(),
    name: "Your Musical Dream",
    category: "Courses",
    originalprice: 150000,
    price: 997,
    rating: 4,
    seller: `Rashane Rashman "Unchained Goat" Watt`,
    avatar:
      "https://images.unsplash.com/photo-1582944682271-172a57ce4b52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    courseimg:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    details:
      "75 Time Grammy Award Winning Artiste. I Wrote All Of Drake's Songs. Remember The Beatles? That Was My Work. Learn How To Become A Legend.",
    fineprint: "These Are My Opinions. My Tactics May Not Work For You",
  },
  {
    _id: Date.now().toString(),
    name: "Improve Your Sex Life with Semen Retension",
    category: "Sex Education",
    price: 1597.0,
    originalprice: 4097.99,
    rating: 5,
    seller: "TypeScript Nĩgga",
    courseimg:
      "https://images.unsplash.com/photo-1570964251517-9e3442ffe368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    avatar:
      "https://images.unsplash.com/photo-1582944682271-172a57ce4b52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details:
      "Improve your life through and semen retension, I will teach you the ways.",
    fineprint: "Up",
  },
  {
    _id: Date.now().toString(),
    name: "Kylie Jenner: How To Scam Your Audience",
    avatar:
      "https://pbs.twimg.com/profile_images/1336735451793641474/IZa-YpdP_400x400.jpg",
    category: "Beauty",
    originalprice: 150000,
    price: 1500000,
    rating: 5,
    seller: "Kylie Jenner",
    courseimg:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    details:
      "If You Want To Learn How To Manipulate Your Audience Into Buying Dumb Shit, You Are In The Right Place",
    fineprint:
      "I Was Born Into Extreme Fame And Wealth. My Tactics May Not Work For You",
  },
  {
    _id: Date.now().toString(),
    name: "Your Musical Dream",
    category: "Courses",
    originalprice: 150000,
    price: 997,
    rating: 4,
    seller: `Rashane Rashman "Unchained Goat" Watt`,
    avatar:
      "https://images.unsplash.com/photo-1582944682271-172a57ce4b52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    courseimg:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    details:
      "75 Time Grammy Award Winning Artiste. I Wrote All Of Drake's Songs. Remember The Beatles? That Was My Work. Learn How To Become A Legend.",
    fineprint: "These Are My Opinions. My Tactics May Not Work For You",
  },
  {
    _id: Date.now().toString(),
    name: "Improve Your Sex Life with Semen Retension",
    category: "Sex Education",
    price: 1597.0,
    originalprice: 4097.99,
    rating: 5,
    seller: "TypeScript Nĩgga",
    courseimg:
      "https://images.unsplash.com/photo-1570964251517-9e3442ffe368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    avatar:
      "https://images.unsplash.com/photo-1582944682271-172a57ce4b52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details:
      "Improve your life through and semen retension, I will teach you the ways.",
    fineprint: "Up",
  },
  {
    _id: Date.now().toString(),
    name: "Kylie Jenner: How To Scam Your Audience",
    avatar:
      "https://pbs.twimg.com/profile_images/1336735451793641474/IZa-YpdP_400x400.jpg",
    category: "Beauty",
    originalprice: 150000,
    price: 1500000,
    rating: 5,
    seller: "Kylie Jenner",
    courseimg:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    details:
      "If You Want To Learn How To Manipulate Your Audience Into Buying Dumb Shit, You Are In The Right Place",
    fineprint:
      "I Was Born Into Extreme Fame And Wealth. My Tactics May Not Work For You",
  },
  {
    _id: Date.now().toString(),
    name: "Your Musical Dream",
    category: "Courses",
    originalprice: 150000,
    price: 997,
    rating: 4,
    seller: `Rashane Rashman "Unchained Goat" Watt`,
    avatar:
      "https://images.unsplash.com/photo-1582944682271-172a57ce4b52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    courseimg:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    details:
      "75 Time Grammy Award Winning Artiste. I Wrote All Of Drake's Songs. Remember The Beatles? That Was My Work. Learn How To Become A Legend.",
    fineprint: "These Are My Opinions. My Tactics May Not Work For You",
  },
  {
    _id: Date.now().toString(),
    name: "Improve Your Sex Life with Semen Retension",
    category: "Sex Education",
    price: 1597.0,
    originalprice: 4097.99,
    rating: 5,
    seller: "TypeScript Nĩgga",
    courseimg:
      "https://images.unsplash.com/photo-1570964251517-9e3442ffe368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    avatar:
      "https://images.unsplash.com/photo-1582944682271-172a57ce4b52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details:
      "Improve your life through and semen retension, I will teach you the ways.",
    fineprint: "Up",
  },
  {
    _id: Date.now().toString(),
    name: "Kylie Jenner: How To Scam Your Audience",
    avatar:
      "https://pbs.twimg.com/profile_images/1336735451793641474/IZa-YpdP_400x400.jpg",
    category: "Beauty",
    originalprice: 150000,
    price: 1500000,
    rating: 5,
    seller: "Kylie Jenner",
    courseimg:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    details:
      "If You Want To Learn How To Manipulate Your Audience Into Buying Dumb Shit, You Are In The Right Place",
    fineprint:
      "I Was Born Into Extreme Fame And Wealth. My Tactics May Not Work For You",
  },
  {
    _id: Date.now().toString(),
    name: "Your Musical Dream",
    category: "Courses",
    originalprice: 150000,
    price: 997,
    rating: 4,
    seller: `Rashane Rashman "Unchained Goat" Watt`,
    avatar:
      "https://images.unsplash.com/photo-1570964251517-9e3442ffe368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    courseimg:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    details:
      "75 Time Grammy Award Winning Artiste. I Wrote All Of Drake's Songs. Remember The Beatles? That Was My Work. Learn How To Become A Legend.",
    fineprint: "These Are My Opinions. My Tactics May Not Work For You",
  },
]

export default products
