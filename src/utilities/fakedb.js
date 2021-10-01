// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

//--------------- getDb local stroage theke item data k get kore. -----------------------

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

//--------------- getDb ar maddome local stroage theke data nile seta json file hisebe asbe. tai jodi local stroage a data thake tobe seta k json theke parse kore javascript object a return korbe and jodi data na thake tobe empty object return korbe.  ------------------
//--------------- data jehuto user ar local stroage theke load korte hobe tai ata k side effect bole jay. orthat side theke ase. useState ar motoi useEffect onek gula use kora jay. shop.js a use kora holo------------------


const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }
