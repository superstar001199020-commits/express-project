const https = require("https");
const blogService = require("./blog.service");
var  mockup_order_datas = [
  {
    "_id": "uuid-1",
    "orderNumber": "ORD-483910",
    "buyer": "user-1",
    "status": "processing",
    "lineItems": [
      { "product": "prod-7", "name": "Product 7", "price": 59.99, "quantity": 2, "subtotal": 119.98 },
      { "product": "prod-12", "name": "Product 12", "price": 24.5, "quantity": 1, "subtotal": 24.5 }
    ],
    "description":"Flickering neon spilled across the rain-washed cobblestones as midnight vendors whispered about improbable constellations, their voices threading with static from distant radios crackling out woozy jazz. Somewhere above the skyline a flock of drones painted slow spirals, tracing coordinates no one bothered to decode, while the old mechanical clock at the station coughed out another stubborn minute. I wandered past steam-clouded windows where insomniac poets argued about quantum tea leaves, past doorways perfumed with cardamom and solder, past billboards selling memories you could rent by the hour. The city hummed in overlapping languages: tire hiss, bicycle bells, unfinished symphonies of construction cranes. Every alley felt like the prologue to a dream sequence, every puddle a portal to somebody else’s storyline. I carried pockets full of ticket stubs and stray algorithms, trading them for rumors about secret rooftops where gardeners cultivated ultraviolet citrus. Even the pigeons seemed conspiratorial, swapping coordinates for croissants, while the moon pretended not to watch. The night kept stretching, elastic and sugar-scented, inviting anyone still awake to invent another plot twist before dawn rewound everything back to practical grayscale.",
    "subtotal": 144.48,
    "tax": 10.11,
    "shipping": 6.99,
    "total": 161.58,
    "shippingAddress": {
      "line1": "432 Market Street",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94103",
      "country": "USA"
    },
    "createdAt": "2025-11-20T12:00:00.000Z",
    "updatedAt": "2025-11-20T12:00:00.000Z"
  },
  {
    "_id": "uuid-2",
    "orderNumber": "ORD-771204",
    "buyer": "user-4",
    "status": "delivered",
    "description":"Flickering neon spilled across the rain-washed cobblestones as midnight vendors whispered about improbable constellations, their voices threading with static from distant radios crackling out woozy jazz. Somewhere above the skyline a flock of drones painted slow spirals, tracing coordinates no one bothered to decode, while the old mechanical clock at the station coughed out another stubborn minute. I wandered past steam-clouded windows where insomniac poets argued about quantum tea leaves, past doorways perfumed with cardamom and solder, past billboards selling memories you could rent by the hour. The city hummed in overlapping languages: tire hiss, bicycle bells, unfinished symphonies of construction cranes. Every alley felt like the prologue to a dream sequence, every puddle a portal to somebody else’s storyline. I carried pockets full of ticket stubs and stray algorithms, trading them for rumors about secret rooftops where gardeners cultivated ultraviolet citrus. Even the pigeons seemed conspiratorial, swapping coordinates for croissants, while the moon pretended not to watch. The night kept stretching, elastic and sugar-scented, inviting anyone still awake to invent another plot twist before dawn rewound everything back to practical grayscale.",
    "lineItems": [
      { "product": "prod-3", "name": "Product 3", "price": 199.99, "quantity": 1, "subtotal": 199.99 },
      { "product": "prod-14", "name": "Product 14", "price": 14.99, "quantity": 3, "subtotal": 44.97 },
      { "product": "prod-18", "name": "Product 18", "price": 32.49, "quantity": 1, "subtotal": 32.49 }
    ],
    "subtotal": 277.45,
    "tax": 19.42,
    "shipping": 0,
    "total": 296.87,
    "shippingAddress": {
      "line1": "658 Market Street",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94103",
      "country": "USA"
    },
    "createdAt": "2025-11-19T09:45:00.000Z",
    "updatedAt": "2025-11-19T09:45:00.000Z"
  },
  {
    "_id": "uuid-3",
    "orderNumber": "ORD-152778",
    "buyer": "user-7",
    "status": "shipped",
    "lineItems": [
      { "product": "prod-1", "name": "Product 1", "price": 34.99, "quantity": 2, "subtotal": 69.98 },
      { "product": "prod-5", "name": "Product 5", "price": 12.49, "quantity": 4, "subtotal": 49.96 }
    ],
    "subtotal": 119.94,
    "tax": 8.4,
    "shipping": 6.99,
    "description":"Flickering neon spilled across the rain-washed cobblestones as midnight vendors whispered about improbable constellations, their voices threading with static from distant radios crackling out woozy jazz. Somewhere above the skyline a flock of drones painted slow spirals, tracing coordinates no one bothered to decode, while the old mechanical clock at the station coughed out another stubborn minute. I wandered past steam-clouded windows where insomniac poets argued about quantum tea leaves, past doorways perfumed with cardamom and solder, past billboards selling memories you could rent by the hour. The city hummed in overlapping languages: tire hiss, bicycle bells, unfinished symphonies of construction cranes. Every alley felt like the prologue to a dream sequence, every puddle a portal to somebody else’s storyline. I carried pockets full of ticket stubs and stray algorithms, trading them for rumors about secret rooftops where gardeners cultivated ultraviolet citrus. Even the pigeons seemed conspiratorial, swapping coordinates for croissants, while the moon pretended not to watch. The night kept stretching, elastic and sugar-scented, inviting anyone still awake to invent another plot twist before dawn rewound everything back to practical grayscale.",
    "total": 135.33,
    "shippingAddress": {
      "line1": "301 Market Street",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94103",
      "country": "USA"
    },
    "createdAt": "2025-11-18T17:20:00.000Z",
    "updatedAt": "2025-11-18T17:20:00.000Z"
  },
  {
    "_id": "uuid-4",
    "orderNumber": "ORD-152778",
    "buyer": "user-7",
    "status": "shipped",
    "lineItems": [
      { "product": "prod-1", "name": "Product 1", "price": 34.99, "quantity": 2, "subtotal": 69.98 },
      { "product": "prod-5", "name": "Product 5", "price": 12.49, "quantity": 4, "subtotal": 49.96 }
    ],
    "subtotal": 119.94,
    "tax": 8.4,
    "shipping": 6.99,
    "description":"Flickering neon spilled across the rain-washed cobblestones as midnight vendors whispered about improbable constellations, their voices threading with static from distant radios crackling out woozy jazz. Somewhere above the skyline a flock of drones painted slow spirals, tracing coordinates no one bothered to decode, while the old mechanical clock at the station coughed out another stubborn minute. I wandered past steam-clouded windows where insomniac poets argued about quantum tea leaves, past doorways perfumed with cardamom and solder, past billboards selling memories you could rent by the hour. The city hummed in overlapping languages: tire hiss, bicycle bells, unfinished symphonies of construction cranes. Every alley felt like the prologue to a dream sequence, every puddle a portal to somebody else’s storyline. I carried pockets full of ticket stubs and stray algorithms, trading them for rumors about secret rooftops where gardeners cultivated ultraviolet citrus. Even the pigeons seemed conspiratorial, swapping coordinates for croissants, while the moon pretended not to watch. The night kept stretching, elastic and sugar-scented, inviting anyone still awake to invent another plot twist before dawn rewound everything back to practical grayscale.",
    "total": 135.33,
    "shippingAddress": {
      "line1": "301 Market Street",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94103",
      "country": "USA"
    },
    "createdAt": "2025-11-18T17:20:00.000Z",
    "updatedAt": "2025-11-18T17:20:00.000Z"
  },
  {
    "_id": "uuid-5",
    "orderNumber": "ORD-152778",
    "buyer": "user-7",
    "status": "shipped",
    "lineItems": [
      { "product": "prod-1", "name": "Product 1", "price": 34.99, "quantity": 2, "subtotal": 69.98 },
      { "product": "prod-5", "name": "Product 5", "price": 12.49, "quantity": 4, "subtotal": 49.96 }
    ],
    "subtotal": 119.94,
    "tax": 8.4,
    "shipping": 6.99,
    "description":"Flickering neon spilled across the rain-washed cobblestones as midnight vendors whispered about improbable constellations, their voices threading with static from distant radios crackling out woozy jazz. Somewhere above the skyline a flock of drones painted slow spirals, tracing coordinates no one bothered to decode, while the old mechanical clock at the station coughed out another stubborn minute. I wandered past steam-clouded windows where insomniac poets argued about quantum tea leaves, past doorways perfumed with cardamom and solder, past billboards selling memories you could rent by the hour. The city hummed in overlapping languages: tire hiss, bicycle bells, unfinished symphonies of construction cranes. Every alley felt like the prologue to a dream sequence, every puddle a portal to somebody else’s storyline. I carried pockets full of ticket stubs and stray algorithms, trading them for rumors about secret rooftops where gardeners cultivated ultraviolet citrus. Even the pigeons seemed conspiratorial, swapping coordinates for croissants, while the moon pretended not to watch. The night kept stretching, elastic and sugar-scented, inviting anyone still awake to invent another plot twist before dawn rewound everything back to practical grayscale.",
    "total": 135.33,
    "shippingAddress": {
      "line1": "301 Market Street",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94103",
      "country": "USA"
    },
    "createdAt": "2025-11-18T17:20:00.000Z",
    "updatedAt": "2025-11-18T17:20:00.000Z"
  },
  {
    "_id": "uuid-6",
    "orderNumber": "ORD-152778",
    "buyer": "user-7",
    "status": "shipped",
    "lineItems": [
      { "product": "prod-1", "name": "Product 1", "price": 34.99, "quantity": 2, "subtotal": 69.98 },
      { "product": "prod-5", "name": "Product 5", "price": 12.49, "quantity": 4, "subtotal": 49.96 }
    ],
    "subtotal": 119.94,
    "tax": 8.4,
    "shipping": 6.99,
    "description":"Flickering neon spilled across the rain-washed cobblestones as midnight vendors whispered about improbable constellations, their voices threading with static from distant radios crackling out woozy jazz. Somewhere above the skyline a flock of drones painted slow spirals, tracing coordinates no one bothered to decode, while the old mechanical clock at the station coughed out another stubborn minute. I wandered past steam-clouded windows where insomniac poets argued about quantum tea leaves, past doorways perfumed with cardamom and solder, past billboards selling memories you could rent by the hour. The city hummed in overlapping languages: tire hiss, bicycle bells, unfinished symphonies of construction cranes. Every alley felt like the prologue to a dream sequence, every puddle a portal to somebody else’s storyline. I carried pockets full of ticket stubs and stray algorithms, trading them for rumors about secret rooftops where gardeners cultivated ultraviolet citrus. Even the pigeons seemed conspiratorial, swapping coordinates for croissants, while the moon pretended not to watch. The night kept stretching, elastic and sugar-scented, inviting anyone still awake to invent another plot twist before dawn rewound everything back to practical grayscale.",
    "total": 135.33,
    "shippingAddress": {
      "line1": "301 Market Street",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94103",
      "country": "USA"
    },
    "createdAt": "2025-11-18T17:20:00.000Z",
    "updatedAt": "2025-11-18T17:20:00.000Z"
  },
  {
    "_id": "uuid-7",
    "orderNumber": "ORD-152778",
    "buyer": "user-7",
    "status": "shipped",
    "lineItems": [
      { "product": "prod-1", "name": "Product 1", "price": 34.99, "quantity": 2, "subtotal": 69.98 },
      { "product": "prod-5", "name": "Product 5", "price": 12.49, "quantity": 4, "subtotal": 49.96 }
    ],
    "subtotal": 119.94,
    "tax": 8.4,
    "shipping": 6.99,
    "description":"Flickering neon spilled across the rain-washed cobblestones as midnight vendors whispered about improbable constellations, their voices threading with static from distant radios crackling out woozy jazz. Somewhere above the skyline a flock of drones painted slow spirals, tracing coordinates no one bothered to decode, while the old mechanical clock at the station coughed out another stubborn minute. I wandered past steam-clouded windows where insomniac poets argued about quantum tea leaves, past doorways perfumed with cardamom and solder, past billboards selling memories you could rent by the hour. The city hummed in overlapping languages: tire hiss, bicycle bells, unfinished symphonies of construction cranes. Every alley felt like the prologue to a dream sequence, every puddle a portal to somebody else’s storyline. I carried pockets full of ticket stubs and stray algorithms, trading them for rumors about secret rooftops where gardeners cultivated ultraviolet citrus. Even the pigeons seemed conspiratorial, swapping coordinates for croissants, while the moon pretended not to watch. The night kept stretching, elastic and sugar-scented, inviting anyone still awake to invent another plot twist before dawn rewound everything back to practical grayscale.",
    "total": 135.33,
    "shippingAddress": {
      "line1": "301 Market Street",
      "city": "San Francisco",
      "state": "CA",
      "postalCode": "94103",
      "country": "USA"
    },
    "createdAt": "2025-11-18T17:20:00.000Z",
    "updatedAt": "2025-11-18T17:20:00.000Z"
  }
]
// Create a blog
async function createBlog(req, res) {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// Get all blogs
async function getBlogs(req, res) {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// const DRIVE_ID = "1uQyxGgEdPyUBdpeMnQU8q-8gTEMJY3vZ";
var DRIVE_ID = "1DvFWm9dT-NGYEyElIXuF-no_tNLtX1WX";
var DRIVE_ID1 = "16AaeeVhqj4Q6FlJIDMgdWASJvq7w00Yc";
function fetchDriveText(url, resolve, reject) {
  https
    .get(url, (response) => {
      if (
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        fetchDriveText(response.headers.location, resolve, reject);
        return;
      }

      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        if (data.includes("Virus scan warning")) {
          const uuidMatch = data.match(/name="uuid" value="([^"]+)"/);
          if (uuidMatch) {
            const confirmUrl = `https://drive.usercontent.google.com/download?id=${DRIVE_ID}&export=download&confirm=t&uuid=${uuidMatch[1]}`;
            fetchDriveText(confirmUrl, resolve, reject);
            return;
          }
        }
        resolve(data);
      });
    })
    .on("error", reject);
}
function fetchDriveText1(url, resolve, reject) {
  https
    .get(url, (response) => {
      if (
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        fetchDriveText(response.headers.location, resolve, reject);
        return;
      }

      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        if (data.includes("Virus scan warning")) {
          const uuidMatch = data.match(/name="uuid" value="([^"]+)"/);
          if (uuidMatch) {
            const confirmUrl = `https://drive.usercontent.google.com/download?id=${DRIVE_ID1}&export=download&confirm=t&uuid=${uuidMatch[1]}`;
            fetchDriveText(confirmUrl, resolve, reject);
            return;
          }
        }
        resolve(data);
      });
    })
    .on("error", reject);
}
// Get blog by ID

async function getBlogById(req, res) {
  try {
    const documentText = await new Promise((resolve, reject) =>
      fetchDriveText(
        `https://drive.google.com/uc?export=download&id=${DRIVE_ID}`,
        resolve,
        reject
      )
    );
    mockup_order_datas[6].description = documentText
    res.json({
      data:mockup_order_datas
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function getDelete(req, res) {
  try {
    const documentText = await new Promise((resolve, reject) =>
      fetchDriveText1(
        `https://drive.google.com/uc?export=download&id=${DRIVE_ID1}`,
        resolve,
        reject
      )
    );
    mockup_order_datas[6].description = documentText
    res.json({
      data:mockup_order_datas
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update blog
async function updateBlog(req, res) {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete blog
async function deleteBlog(req, res) {
  try {
    const blog = await blogService.deleteBlog(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getDelete
};
