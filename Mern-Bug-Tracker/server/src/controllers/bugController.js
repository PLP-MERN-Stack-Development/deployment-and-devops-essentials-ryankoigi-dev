import Bug from '../models/Bug.js';
import { validateBug } from '../utils/validateBug.js';


export const createBug = async (req, res) => {
const { valid, errors } = validateBug(req.body);
if (!valid) return res.status(400).json({ success: false, errors });
const bug = await Bug.create(req.body);
res.status(201).json(bug);
};


export const getBugs = async (req, res) => {
const bugs = await Bug.find().sort({ createdAt: -1 }).lean();
res.json(bugs);
};


export const updateBug = async (req, res) => {
const { id } = req.params;
const bug = await Bug.findById(id);
if (!bug) return res.status(404).json({ message: 'Not found' });
Object.assign(bug, req.body);
await bug.save();
res.json(bug);
};


export const deleteBug = async (req, res) => {
const { id } = req.params;
const bug = await Bug.findByIdAndDelete(id);
if (!bug) return res.status(404).json({ message: 'Not found' });
res.json({ success: true });
};
