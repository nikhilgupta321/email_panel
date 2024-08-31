const Country = require('../models/country.model');
// Get all items
const getAllCountry = async (req, res) => {
  try {
    const items = await Country.findAll();
    res.json(items);
  } catch (err) {
    console.error('Error in getAllItems:', err);
    console.error(err.stack);  // Log the stack trace
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Get a specific item by ID
const getCountryById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await Country.findByPk(itemId);
    res.json(item);
  } catch (err) {
    console.error(`Error in getItemById for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Add a new item
const addCountry = async (req, res) => {
  const newItem = req.body;
  try {
    const createdItem = await Country.create(newItem);
    res.json(createdItem);
  } catch (err) {
    console.error('Error in addItem:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Update an item
const updateCountry = async (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  try {
    await Country.update(updatedItem, { where: { id: itemId } });
    res.json({ id: itemId, ...updatedItem });
  } catch (err) {
    console.error(`Error in updateItem for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Delete an item
const deleteCountry = async (req, res) => {
  const itemId = req.params.id;
  try {
    await Country.destroy({ where: { id: itemId } });
    res.json({ message: 'Item deleted successfully', id: itemId });
  } catch (err) {
    console.error(`Error in deleteItem for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllCountry,
  getCountryById,
  addCountry,
  updateCountry,
  deleteCountry
};
