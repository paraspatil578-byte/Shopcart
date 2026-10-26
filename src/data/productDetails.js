// Loads every product image from src/assets/images/products
// (matches ignoring case, "-" vs "_" and the file extension)
const imageModules = import.meta.glob(
  "../assets/images/products/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
);

const normalize = (text) =>
  text.toLowerCase().replace(/\.[a-z]+$/, "").replace(/[^a-z0-9]/g, "");

const findImage = (fileName) => {
  const key = Object.keys(imageModules).find(
    (path) => normalize(path.split("/").pop()) === normalize(fileName)
  );
  if (!key) console.warn("Image not found in products folder:", fileName);
  return key ? imageModules[key] : undefined;
};

const productDetails = [
  {
    id: 1,
    name: "Samsung Galaxy M14 5G",
    brand: "Samsung",
    category: "Electronics",
    image: findImage("Samsung_phone.png"),
    rating: 4.4,
    reviews: 1850,
    shortDescription:
      "A powerful 5G smartphone with a large display, long-lasting battery and smooth everyday performance.",
    price: 12499,
    originalPrice: 14999,
    discount: "17%",
    availability: "In Stock",
    description:
      "The Samsung Galaxy M14 5G is designed to deliver a smooth and reliable smartphone experience for everyday users. It combines 5G connectivity with a large immersive display, dependable performance and a long-lasting battery that helps users stay connected throughout the day. Whether you are browsing the internet, watching videos, communicating with friends and family, using social media or completing everyday tasks, the Galaxy M14 5G provides a practical and feature-rich experience.",
    keyFeatures: [
      "5G Connectivity",
      "Large Immersive Display",
      "Long-lasting 6000 mAh Battery",
      "Powerful Performance",
      "Expandable Storage",
    ],
    specifications: {
      brand: "Samsung",
      model: "Galaxy M14 5G",
      connectivity: "5G",
      battery: "6000 mAh",
      color: "Black",
      warranty: "1 Year",
    },
    customerReviews: [
      { name: "Rahul", rating: 5, comment: "Good performance and excellent battery backup for everyday use." },
      { name: "Sneha", rating: 4, comment: "The phone offers good features and a smooth overall experience." },
    ],
  },
  {
    id: 2,
    name: "Puma Running Shoes",
    brand: "Puma",
    category: "Fashion",
    image: findImage("puma_shoes.png"),
    rating: 3.8,
    reviews: 1320,
    shortDescription:
      "Lightweight running shoes with a cushioned sole for comfort during workouts and daily wear.",
    price: 2499,
    originalPrice: 3999,
    discount: "38%",
    availability: "In Stock",
    description:
      "These Puma running shoes combine a breathable upper with a cushioned midsole to keep your feet comfortable on every run. The flexible outsole provides reliable grip, while the lightweight build makes them equally suitable for the gym, jogging or casual everyday wear.",
    keyFeatures: [
      "Breathable Mesh Upper",
      "Cushioned Midsole",
      "Slip-Resistant Outsole",
      "Lightweight Design",
      "Lace-Up Fit",
    ],
    specifications: {
      brand: "Puma",
      type: "Running Shoes",
      closure: "Lace-Up",
      upperMaterial: "Mesh",
      color: "Black / White",
      warranty: "3 Months",
    },
    customerReviews: [
      { name: "Aman", rating: 4, comment: "Very comfortable for daily jogging and light workouts." },
      { name: "Priya", rating: 3, comment: "Good looking shoes, but the sizing runs slightly small." },
    ],
  },
  {
    id: 3,
    name: "Amazon Echo Dot",
    brand: "Amazon",
    category: "Electronics",
    image: findImage("amazon_echo_dot.png"),
    rating: 4.6,
    reviews: 2450,
    shortDescription:
      "A compact smart speaker with Alexa for music, smart-home control and quick answers.",
    price: 3499,
    originalPrice: 4499,
    discount: "22%",
    availability: "In Stock",
    description:
      "The Amazon Echo Dot is a compact smart speaker that brings voice control to your home. Ask Alexa to play music, set alarms, answer questions or control compatible smart devices. Its fabric-covered design fits easily into any room, and the improved speaker delivers clear vocals and balanced sound.",
    keyFeatures: [
      "Alexa Voice Control",
      "Clear Vocals and Balanced Bass",
      "Smart Home Controller",
      "Built-in Microphone Off Button",
      "Compact Design",
    ],
    specifications: {
      brand: "Amazon",
      model: "Echo Dot",
      connectivity: "Wi-Fi, Bluetooth",
      voiceAssistant: "Alexa",
      color: "Charcoal",
      warranty: "1 Year",
    },
    customerReviews: [
      { name: "Vikram", rating: 5, comment: "Great sound for its size and Alexa works very well." },
      { name: "Neha", rating: 4, comment: "Easy to set up and handy for music and reminders." },
    ],
  },
  {
    id: 4,
    name: "American Tourister Trolley Bag",
    brand: "American Tourister",
    category: "Fashion",
    image: findImage("trolley-bag.png"),
    rating: 2.9,
    reviews: 970,
    shortDescription:
      "A durable hard-shell trolley bag with smooth wheels, ideal for short trips and vacations.",
    price: 3299,
    originalPrice: 4999,
    discount: "34%",
    availability: "Out of Stock",
    description:
      "This hard-shell trolley bag is built to handle regular travel. The sturdy exterior protects your belongings, the spinner wheels glide smoothly through airports and stations, and the spacious interior with a secure lock keeps everything organised on your trip.",
    keyFeatures: [
      "Hard-Shell Body",
      "360° Spinner Wheels",
      "Built-in Combination Lock",
      "Spacious Interior",
      "Telescopic Handle",
    ],
    specifications: {
      brand: "American Tourister",
      type: "Cabin Trolley",
      material: "Polypropylene",
      wheels: "4 Spinner Wheels",
      color: "Red",
      warranty: "3 Years",
    },
    customerReviews: [
      { name: "Karan", rating: 3, comment: "Looks good and rolls smoothly, though it scratches easily." },
      { name: "Divya", rating: 3, comment: "Decent space for a weekend trip." },
    ],
  },
  {
    id: 5,
    name: "HP Wireless Keyboard",
    brand: "HP",
    category: "Electronics",
    image: findImage("keyboard.png"),
    rating: 4.2,
    reviews: 760,
    shortDescription:
      "A slim wireless keyboard with quiet keys and a reliable connection for home and office use.",
    price: 899,
    originalPrice: 1299,
    discount: "31%",
    availability: "In Stock",
    description:
      "The HP wireless keyboard offers a comfortable typing experience with quiet, responsive keys. Its slim full-size layout includes a number pad, and the plug-and-play wireless receiver gives you a stable connection without any complicated setup.",
    keyFeatures: [
      "2.4 GHz Wireless Connection",
      "Quiet, Responsive Keys",
      "Full-Size Layout with Number Pad",
      "Plug and Play",
      "Long Battery Life",
    ],
    specifications: {
      brand: "HP",
      type: "Wireless Keyboard",
      connectivity: "2.4 GHz USB Receiver",
      layout: "Full Size",
      color: "Black",
      warranty: "1 Year",
    },
    customerReviews: [
      { name: "Rohit", rating: 4, comment: "Comfortable keys and the connection is stable." },
      { name: "Anjali", rating: 4, comment: "Good value for money for office work." },
    ],
  },
  {
    id: 6,
    name: "Milton Thermosteel Bottle",
    brand: "Milton",
    category: "Home & Kitchen",
    image: findImage("thermos-bottle.png"),
    rating: 3.5,
    reviews: 1540,
    shortDescription:
      "A stainless steel insulated bottle that keeps drinks hot or cold for hours.",
    price: 799,
    originalPrice: 1099,
    discount: "27%",
    availability: "In Stock",
    description:
      "The Milton Thermosteel bottle is made from durable stainless steel with double-wall insulation, keeping beverages hot or cold for many hours. The leak-proof lid and compact design make it a convenient companion for the office, gym or travel.",
    keyFeatures: [
      "Double-Wall Insulation",
      "Leak-Proof Lid",
      "Stainless Steel Body",
      "Easy to Carry",
      "BPA-Free",
    ],
    specifications: {
      brand: "Milton",
      capacity: "1 Litre",
      material: "Stainless Steel",
      insulation: "Double Wall",
      color: "Silver",
      warranty: "1 Year",
    },
    customerReviews: [
      { name: "Sunil", rating: 4, comment: "Keeps water cold all day." },
      { name: "Meera", rating: 3, comment: "Good quality but a little heavy." },
    ],
  },
  {
    id: 7,
    name: "Maybelline Lipstick Set",
    brand: "Maybelline",
    category: "Beauty",
    image: findImage("lipstick-set.png"),
    rating: 5.0,
    reviews: 820,
    shortDescription:
      "A set of richly pigmented lipsticks in popular shades with a smooth, comfortable finish.",
    price: 399,
    originalPrice: 749,
    discount: "47%",
    availability: "In Stock",
    description:
      "This Maybelline lipstick set brings together a range of flattering shades in one pack. The creamy formula glides on smoothly, delivers rich colour and feels comfortable on the lips through the day, making it perfect for both everyday looks and special occasions.",
    keyFeatures: [
      "Rich, Long-Lasting Colour",
      "Creamy and Comfortable Formula",
      "Multiple Popular Shades",
      "Easy to Apply",
      "Travel Friendly",
    ],
    specifications: {
      brand: "Maybelline",
      type: "Lipstick Set",
      finish: "Creamy Matte",
      shades: "Assorted",
      packContents: "Set of Lipsticks",
      shelfLife: "24 Months",
    },
    customerReviews: [
      { name: "Rasuu", rating: 5, comment: "Lovely shades and they last for hours." },
      { name: "Pooja", rating: 5, comment: "Amazing value for the price." },
    ],
  },
  {
    id: 8,
    name: "Levi's Casual Jeans",
    brand: "Levi's",
    category: "Fashion",
    image: findImage("jeans-1.png"),
    rating: 4.6,
    reviews: 2100,
    shortDescription:
      "Classic casual jeans with a comfortable fit and durable denim for everyday wear.",
    price: 1899,
    originalPrice: 2999,
    discount: "37%",
    availability: "In Stock",
    description:
      "These Levi's casual jeans are made from quality denim that is comfortable, durable and easy to style. The classic cut works well with shirts, tees and sneakers, and the sturdy stitching helps them keep their shape wash after wash.",
    keyFeatures: [
      "Durable Denim",
      "Comfortable Regular Fit",
      "Classic Five-Pocket Design",
      "Reinforced Stitching",
      "Easy to Style",
    ],
    specifications: {
      brand: "Levi's",
      type: "Casual Jeans",
      fit: "Regular",
      material: "Cotton Denim",
      color: "Blue",
      care: "Machine Wash",
    },
    customerReviews: [
      { name: "Arjun", rating: 5, comment: "Perfect fit and great quality denim." },
      { name: "Shreya", rating: 4, comment: "Comfortable and looks smart." },
    ],
  },
  {
    id: 9,
    name: "Bajaj Mixer Grinder",
    brand: "Bajaj",
    category: "Home & Kitchen",
    image: findImage("mixer-grinder.png"),
    rating: 2.4,
    reviews: 690,
    shortDescription:
      "A powerful mixer grinder with multiple jars for grinding, mixing and blending.",
    price: 2799,
    originalPrice: 3499,
    discount: "20%",
    availability: "Out of Stock",
    description:
      "The Bajaj mixer grinder is built for everyday Indian kitchens. Its strong motor handles wet and dry grinding, and the set of jars lets you prepare chutneys, masalas, batters and juices with ease. Overload protection and sturdy blades add safety and durability.",
    keyFeatures: [
      "Powerful Motor",
      "Three Stainless Steel Jars",
      "Overload Protection",
      "Wet and Dry Grinding",
      "Sturdy Stainless Steel Blades",
    ],
    specifications: {
      brand: "Bajaj",
      type: "Mixer Grinder",
      power: "750 Watts",
      jars: "3 Jars",
      color: "White / Blue",
      warranty: "2 Years",
    },
    customerReviews: [
      { name: "Lata", rating: 2, comment: "Works well for chutneys but is quite noisy." },
      { name: "Manoj", rating: 3, comment: "Decent performance for the price." },
    ],
  },
  {
    id: 10,
    name: "Canon Inkjet Printer",
    brand: "Canon",
    category: "Electronics",
    image: findImage("printer.png"),
    rating: 3.2,
    reviews: 540,
    shortDescription:
      "A compact inkjet printer for sharp documents and vibrant photos at home or in the office.",
    price: 5499,
    originalPrice: 6499,
    discount: "15%",
    availability: "In Stock",
    description:
      "This Canon inkjet printer delivers sharp text and vivid colour prints for documents, school projects and photos. Its compact body fits easily on a desk, and setup is simple, making it a practical choice for home and small-office use.",
    keyFeatures: [
      "Sharp Text and Vibrant Colour Prints",
      "Compact Design",
      "Easy Setup",
      "USB Connectivity",
      "Photo Printing Support",
    ],
    specifications: {
      brand: "Canon",
      type: "Inkjet Printer",
      printing: "Colour",
      connectivity: "USB",
      color: "Black",
      warranty: "1 Year",
    },
    customerReviews: [
      { name: "Deepak", rating: 4, comment: "Easy to set up and the print quality is good." },
      { name: "Kavita", rating: 3, comment: "Ink runs out a bit quickly." },
    ],
  },
  {
    id: 11,
    name: "Nivea Skincare Combo",
    brand: "Nivea",
    category: "Beauty",
    image: findImage("skincare-combo.png"),
    rating: 4.5,
    reviews: 1280,
    shortDescription:
      "A skincare combo to cleanse, moisturise and protect your skin every day.",
    price: 599,
    originalPrice: 799,
    discount: "25%",
    availability: "In Stock",
    description:
      "The Nivea skincare combo brings together everyday essentials to keep your skin soft, fresh and nourished. The gentle formulas absorb quickly, feel light on the skin and fit easily into a simple daily routine.",
    keyFeatures: [
      "Gentle Everyday Formulas",
      "Deep Moisturisation",
      "Fast Absorbing",
      "Suitable for Daily Use",
      "Value Combo Pack",
    ],
    specifications: {
      brand: "Nivea",
      type: "Skincare Combo",
      skinType: "All Skin Types",
      packContents: "Face Wash, Moisturiser, Lotion",
      shelfLife: "24 Months",
      origin: "India",
    },
    customerReviews: [
      { name: "Isha", rating: 5, comment: "My skin feels soft and fresh." },
      { name: "Tanvi", rating: 4, comment: "Good combo at a nice price." },
    ],
  },
  {
    id: 12,
    name: "Cello Non-Stick Pan",
    brand: "Cello",
    category: "Home & Kitchen",
    image: findImage("nonstick-pan.png"),
    rating: 2.8,
    reviews: 475,
    shortDescription:
      "A durable non-stick pan that cooks evenly and cleans up easily.",
    price: 999,
    originalPrice: 1399,
    discount: "29%",
    availability: "In Stock",
    description:
      "The Cello non-stick pan makes everyday cooking easier. The even-heating base helps food cook uniformly, the non-stick coating needs less oil and the comfortable handle gives a secure grip, whether you are making dosas, omelettes or stir-fries.",
    keyFeatures: [
      "Non-Stick Coating",
      "Even Heat Distribution",
      "Comfortable Handle",
      "Easy to Clean",
      "Suitable for Daily Cooking",
    ],
    specifications: {
      brand: "Cello",
      type: "Non-Stick Pan",
      diameter: "24 cm",
      material: "Aluminium",
      color: "Red / Black",
      warranty: "1 Year",
    },
    customerReviews: [
      { name: "Sangeeta", rating: 3, comment: "Cooks evenly and is easy to wash." },
      { name: "Harish", rating: 2, comment: "The coating started to wear after a few months." },
    ],
  },
];

export default productDetails;