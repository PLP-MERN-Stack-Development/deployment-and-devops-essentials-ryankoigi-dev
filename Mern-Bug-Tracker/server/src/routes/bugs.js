import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import { createBug, getBugs, updateBug, deleteBug } from '../controllers/bugController.js';


const router = express.Router();


router.post('/', asyncHandler(createBug));
router.get('/', asyncHandler(getBugs));
router.put('/:id', asyncHandler(updateBug));
router.delete('/:id', asyncHandler(deleteBug));


export default router;
