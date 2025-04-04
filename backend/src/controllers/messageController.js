import Message from "../schema/Message.js";

// Handle contact form submission
export const sendMessage = async(req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error sending message", error });
    }
};

// Get all messages (for admin)
export const getMessages = async(req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching messages", error });
    }
};