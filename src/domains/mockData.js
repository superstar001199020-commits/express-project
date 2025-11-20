const { v4: uuidv4 } = require("uuid");

const createTimestamp = () => new Date().toISOString();

const writers = [
  {
    _id: uuidv4(),
    name: "Aisha Patel",
    email: "aisha.patel@example.com",
    bio: "Technology journalist covering startups and product launches.",
    createdAt: createTimestamp(),
    updatedAt: createTimestamp(),
  },
  {
    _id: uuidv4(),
    name: "Leo Hernandez",
    email: "leo.hernandez@example.com",
    bio: "Freelance writer focused on culture, travel, and photography.",
    createdAt: createTimestamp(),
    updatedAt: createTimestamp(),
  },
];

const blogs = [
  {
    _id: uuidv4(),
    title: "How to Build a Content Strategy in 2025",
    content:
      "A strategic approach to content creation starts with understanding your audience...",
    writer: writers[0]._id,
    tags: ["strategy", "content"],
    publishedAt: createTimestamp(),
    createdAt: createTimestamp(),
    updatedAt: createTimestamp(),
  },
  {
    _id: uuidv4(),
    title: "Capturing Better Travel Photos with Your Phone",
    content:
      "You don’t need a full-frame camera to take incredible travel shots. Start by focusing on light...",
    writer: writers[1]._id,
    tags: ["travel", "photography"],
    publishedAt: createTimestamp(),
    createdAt: createTimestamp(),
    updatedAt: createTimestamp(),
  },
];

module.exports = {
  writers,
  blogs,
};

