export const validateBug = (payload) => {
if (!payload) return { valid: false, errors: ['No data provided'] };
const errors = [];
if (!payload.title || payload.title.trim().length < 3) errors.push('Title is required (min 3 chars)');
if (!payload.description || payload.description.trim().length < 5) errors.push('Description is required (min 5 chars)');
if (payload.priority && !['low','medium','high'].includes(payload.priority)) errors.push('Invalid priority');
if (payload.status && !['open','in-progress','resolved'].includes(payload.status)) errors.push('Invalid status');
return { valid: errors.length === 0, errors };
};
