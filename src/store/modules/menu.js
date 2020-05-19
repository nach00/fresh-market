// Utilities
import {
  make,
} from 'vuex-pathify'

// <div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
const state = {
  categories: {
    poultry: {
      color: '#a0c391',
      icon: 'flaticon-037-chicken-breast',
    },
    pork: {
      color: '#ffccd1',
      icon: 'flaticon-038-meat',
    },
    seafood: {
      color: '#fde484',
      icon: 'flaticon-043-shrimp',
    },
    vegetable: {
      color: '#99b190',
      icon: 'flaticon-045-cauliflower',
    },
    lamb: {
      color: '#fcb254',
      icon: 'flaticon-040-salmon',
    },
    sideDish: {
      color: '#c5e8b6',
      icon: 'flaticon-026-bread',
    },
    pasta: {
      color: '#e6988e',
      icon: 'flaticon-016-wheat',
    },
    beef: {
      color: '#b2c530',
      icon: 'flaticon-039-steak',
    },
  },
  items: [
    {
      name: 'Macaroni & Cheese',
      category: 'vegetable',
    },
    {
      name: 'Chicken Cordon Bleu',
      category: 'poultry',
    },
    {
      name: 'Lamb kabob',
      category: 'lamb',
    },
    {
      name: 'Okra & Tomato',
      category: 'pasta',
    },
    {
      name: 'Steamed cabbage',
      category: 'vegetable',
    },
    {
      name: 'Rotisserie Chicken',
      category: 'poultry',
    },
    {
      name: 'Sweet chili chicken',
      category: 'poultry',
    },
    {
      name: 'Buffalo chicken wings',
      category: 'poultry',
    },
    {
      name: 'Pepperoni pizza',
      category: 'pasta',
    },
    {
      name: 'Spanish rice',
      category: 'vegetable',
    },
    {
      name: 'Roasted leg of lamb',
      category: 'lamb',
    },
    {
      name: 'Ranchero beans',
      category: 'vegetable',
    },
    {
      name: 'Vegetable soup',
      category: 'sideDish',
    },
    {
      name: 'Jalapeno Chicken',
      category: 'poultry',
    },
    {
      name: 'Grilled Catfish',
      category: 'seafood',
    },
    {
      name: 'Chicken Fajitas',
      category: 'poultry',
    },
    {
      name: 'Beef fajitas',
      category: 'beef',
    },
    {
      name: 'Pork loin',
      category: 'pork',
    },
    {
      name: 'Chicken Bulgogi',
      category: 'poultry',
    },
    {
      name: 'Pasta',
      category: 'vegetable',
    },
    {
      name: 'Refried beans',
      category: 'sideDish',
    },
    {
      name: 'Chicken FLautas',
      category: 'poultry',
    },
    {
      name: 'Pork ribs',
      category: 'beef',
    },
    {
      name: 'Canton noodles',
      category: 'sideDish',
    },
    {
      name: 'Corn',
      category: 'vegetable',
    },
    {
      name: 'Butterfly fried shrimp',
      category: 'seafood',
    },
    {
      name: 'Chicken fried steak',
      category: 'poultry',
    },
    {
      name: 'Meat & cheese lasagna',
      category: 'vegetable',
    },
    {
      name: 'Beef tips',
      category: 'beef',
    },
    {
      name: 'Broccoli',
      category: 'vegetable',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {}

const getters = {
  items: state => {
    return state.items.map(item => {
      const category = state.categories[item.category]

      return Object.assign({}, item, category)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
