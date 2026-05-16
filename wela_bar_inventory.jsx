import React, { useMemo, useState } from "react";

const stockDate = "2026-05-14";

const barStartingItems = [
  { id: 1, name: "Martell VSOP", category: "Spirits", unit: "bottle", start: 3, order: 0, sell: 0, stock: 3, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 2, name: "Martell Noblige", category: "Spirits", unit: "bottle", start: 2, order: 0, sell: 0, stock: 2, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 3, name: "Martell Gordon Bleu", category: "Spirits", unit: "bottle", start: 0, order: 0, sell: 0, stock: 0, lowStock: 1, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 4, name: "Chivas 12Y", category: "Whisky", unit: "bottle", start: 6, order: 0, sell: 3, stock: 3, lowStock: 3, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 5, name: "Chivas 18Y", category: "Whisky", unit: "bottle", start: 4, order: 0, sell: 0, stock: 4, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 6, name: "Jameson 700ml", category: "Whisky", unit: "bottle", start: 2, order: 0, sell: 0, stock: 2, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 7, name: "Regency 350ml", category: "Spirits", unit: "bottle", start: 16, order: 0, sell: 15, stock: 1, lowStock: 5, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 8, name: "Regency 500ml", category: "Spirits", unit: "bottle", start: 15, order: 0, sell: 2, stock: 13, lowStock: 5, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 9, name: "Hennessy XO 1L", category: "Spirits", unit: "bottle", start: 3, order: 0, sell: 0, stock: 3, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 10, name: "Hennessy VSOP", category: "Spirits", unit: "bottle", start: 4, order: 0, sell: 2, stock: 2, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 11, name: "Blue Label", category: "Whisky", unit: "bottle", start: 1, order: 0, sell: 0, stock: 1, lowStock: 1, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 12, name: "Gold Label", category: "Whisky", unit: "bottle", start: 6, order: 0, sell: 0, stock: 6, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 13, name: "Black Label", category: "Whisky", unit: "bottle", start: 1, order: 0, sell: 0, stock: 1, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 14, name: "Red Label 1L", category: "Whisky", unit: "bottle", start: 3, order: 0, sell: 0, stock: 3, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 15, name: "Red Label", category: "Whisky", unit: "bottle", start: 3, order: 0, sell: 0, stock: 3, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 16, name: "Moutai", category: "Spirits", unit: "bottle", start: 0, order: 0, sell: 0, stock: 0, lowStock: 1, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 17, name: "Blend 285 1L", category: "Whisky", unit: "bottle", start: 1, order: 0, sell: 0, stock: 1, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 18, name: "Absolute Vodka", category: "Vodka", unit: "bottle", start: 2, order: 0, sell: 0, stock: 2, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 19, name: "Absolute Vodka 0.20L", category: "Vodka", unit: "bottle", start: 0, order: 0, sell: 0, stock: 0, lowStock: 1, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 20, name: "Vodka Maxx", category: "Vodka", unit: "bottle", start: 12, order: 0, sell: 0, stock: 12, lowStock: 3, cost: 0, supplier: "-", remark: "Handwritten item", lastUpdated: stockDate },
  { id: 21, name: "Heineken", category: "Beer", unit: "bottle", start: 10, order: 0, sell: 0, stock: 10, lowStock: 5, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 22, name: "Singha Beer", category: "Beer", unit: "bottle", start: 47, order: 0, sell: 30, stock: 17, lowStock: 20, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 23, name: "Singha Reserve", category: "Beer", unit: "bottle", start: 15, order: 0, sell: 0, stock: 15, lowStock: 10, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 24, name: "Leo", category: "Beer", unit: "bottle", start: 7, order: 12, sell: 8, stock: 11, lowStock: 10, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 25, name: "Champagne", category: "Wine", unit: "bottle", start: 8, order: 0, sell: 0, stock: 8, lowStock: 2, cost: 0, supplier: "-", remark: "Handwritten item", lastUpdated: stockDate },
  { id: 26, name: "Hoegaarden", category: "Beer", unit: "bottle", start: 6, order: 0, sell: 0, stock: 6, lowStock: 5, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 27, name: "Hoegaarden Roses", category: "Beer", unit: "bottle", start: 7, order: 0, sell: 0, stock: 7, lowStock: 5, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 28, name: "Coke", category: "Mixer", unit: "can", start: 22, order: 0, sell: 15, stock: 7, lowStock: 20, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 29, name: "Coke Zero", category: "Mixer", unit: "can", start: 17, order: 0, sell: 0, stock: 17, lowStock: 20, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 30, name: "Sprite", category: "Mixer", unit: "can", start: 18, order: 0, sell: 0, stock: 18, lowStock: 20, cost: 0, supplier: "-", remark: "Stock not clearly written, calculated from start/order/sell", lastUpdated: stockDate },
  { id: 31, name: "Tonic", category: "Mixer", unit: "can", start: 0, order: 0, sell: 0, stock: 0, lowStock: 10, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 32, name: "Schweppes Lime", category: "Mixer", unit: "can", start: 20, order: 0, sell: 0, stock: 20, lowStock: 10, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 33, name: "Singha Lemon Soda", category: "Mixer", unit: "can", start: 0, order: 0, sell: 0, stock: 0, lowStock: 10, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 34, name: "Soda", category: "Mixer", unit: "bottle", start: 67, order: 0, sell: 44, stock: 23, lowStock: 30, cost: 0, supplier: "-", remark: "หักรอ 12 + PR 7", lastUpdated: stockDate },
  { id: 35, name: "Oishi Green Tea", category: "Mixer", unit: "bottle", start: 6, order: 0, sell: 0, stock: 6, lowStock: 5, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 36, name: "Water", category: "Mixer", unit: "bottle", start: 413, order: 0, sell: 125, stock: 288, lowStock: 100, cost: 0, supplier: "-", remark: "Stock calculated from start/order/sell", lastUpdated: stockDate },
  { id: 37, name: "Spy Kamikaze", category: "Beer", unit: "bottle", start: 5, order: 0, sell: 0, stock: 5, lowStock: 5, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 38, name: "Spy Butterfly Kiss", category: "Beer", unit: "bottle", start: 0, order: 0, sell: 0, stock: 0, lowStock: 5, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 39, name: "Keg", category: "Beer", unit: "keg", start: 4, order: 0, sell: 0, stock: 4, lowStock: 2, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
  { id: 40, name: "Beer Jug", category: "Other", unit: "piece", start: 0, order: 0, sell: 2, stock: 0, lowStock: 2, cost: 0, supplier: "-", remark: "Stock not clearly written", lastUpdated: stockDate },
  { id: 41, name: "Beer Town", category: "Other", unit: "piece", start: 0, order: 0, sell: 10, stock: 0, lowStock: 2, cost: 0, supplier: "-", remark: "Stock not clearly written", lastUpdated: stockDate },
  { id: 42, name: "ผ้าเย็น Cool Cloth", category: "Other", unit: "piece", start: 7, order: 0, sell: 2, stock: 5, lowStock: 10, cost: 0, supplier: "-", remark: "", lastUpdated: stockDate },
];

const storeStartingItems = barStartingItems.map((item) => ({
  ...item,
  id: item.id + 1000,
  start: 0,
  order: 0,
  sell: 0,
  stock: 0,
  lowStock: Math.max(item.lowStock * 2, item.lowStock),
  remark: "Store stock",
}));

const categories = ["All", "Beer", "Whisky", "Spirits", "Vodka", "Wine", "Mixer", "Food", "Other"];

const translations = {
  en: {
    linkedInventoryApp: "Linked Inventory App",
    title: "Wela Bar + Store Inventory",
    subtitle: "Manage bar stock and store stock separately, then transfer stock between both sides.",
    english: "English",
    thai: "Thai",
    showTests: "Show Tests",
    hideTests: "Hide Tests",
    exportCSV: "Export CSV",
    barItems: "Bar Items",
    storeItems: "Store Items",
    barValue: "Bar Value",
    storeValue: "Store Value",
    transferTitle: "Transfer Stock Between Store and Bar",
    item: "Item",
    from: "From",
    to: "To",
    quantity: "Quantity",
    transfer: "Transfer",
    transferExample: "Example: transfer 12 Singha Beer from Store to Bar. Store stock goes down, Bar stock goes up.",
    recentTransferLog: "Recent Transfer Log",
    builtInTests: "Built-in Test Checks",
    allPassed: "All Passed",
    someFailed: "Some Failed",
    barInventory: "Bar Inventory",
    storeInventory: "Store Inventory",
    products: "Products",
    lowStockItems: "Low Stock Items",
    totalSold: "Total Sold",
    addNewItemTo: "Add New Item to",
    itemName: "Item name",
    category: "Category",
    unit: "Unit",
    start: "Start",
    order: "Order",
    sell: "Sell",
    stock: "Stock",
    lowStockAlert: "Low stock alert",
    costPerUnit: "Cost per unit ฿",
    supplier: "Supplier",
    remark: "Remark",
    addItem: "Add Item",
    search: "Search",
    filterCategory: "Filter category",
    noItems: "{t.noItems}",
    actions: "Actions",
    totalValue: "Total Value ฿",
    lowStockWarning: "{t.lowStockWarning}",
    lastUpdated: "Last updated",
    placeholderItem: "e.g. Singha Beer",
    placeholderUnit: "bottle / can / kg",
    placeholderAuto: "Auto if blank",
    placeholderSupplier: "Supplier name",
    placeholderRemark: "Remark",
    placeholderSearch: "Search item, supplier or remark",
    calc: "Calc",
    delete: "Delete",
    store: "Store",
    bar: "Bar",
    enterItem: "Please enter an item name.",
    validTransferQty: "Please enter a valid transfer quantity.",
    differentLocations: "Please select different From and To locations.",
    itemNotFound: "Item not found.",
    notEnoughStock: "does not have enough stock.",
  },
  th: {
    linkedInventoryApp: "ระบบสต็อกที่เชื่อมกัน",
    title: "สต็อกบาร์ + สต็อกร้าน Wela",
    subtitle: "จัดการสต็อกบาร์และสต็อกร้านแยกกัน พร้อมโอนของระหว่างสองฝั่งได้",
    english: "อังกฤษ",
    thai: "ไทย",
    showTests: "แสดงการทดสอบ",
    hideTests: "ซ่อนการทดสอบ",
    exportCSV: "ส่งออก CSV",
    barItems: "รายการในบาร์",
    storeItems: "รายการในสโตร์",
    barValue: "มูลค่าสต็อกบาร์",
    storeValue: "มูลค่าสต็อกสโตร์",
    transferTitle: "โอนสต็อกระหว่างสโตร์และบาร์",
    item: "สินค้า",
    from: "จาก",
    to: "ไปยัง",
    quantity: "จำนวน",
    transfer: "โอนสต็อก",
    transferExample: "ตัวอย่าง: โอน Singha Beer 12 ขวด จากสโตร์ไปบาร์ สต็อกสโตร์จะลดลง และสต็อกบาร์จะเพิ่มขึ้น",
    recentTransferLog: "ประวัติการโอนล่าสุด",
    builtInTests: "ตรวจสอบระบบ",
    allPassed: "ผ่านทั้งหมด",
    someFailed: "มีบางรายการไม่ผ่าน",
    barInventory: "สต็อกบาร์",
    storeInventory: "สต็อกสโตร์",
    products: "รายการสินค้า",
    lowStockItems: "สินค้าใกล้หมด",
    totalSold: "ขายทั้งหมด",
    addNewItemTo: "เพิ่มสินค้าใหม่ใน",
    itemName: "ชื่อสินค้า",
    category: "หมวดหมู่",
    unit: "หน่วย",
    start: "ยอดเริ่มต้น",
    order: "รับเข้า/สั่งเพิ่ม",
    sell: "ขายออก",
    stock: "คงเหลือ",
    lowStockAlert: "แจ้งเตือนใกล้หมด",
    costPerUnit: "ต้นทุนต่อหน่วย ฿",
    supplier: "ซัพพลายเออร์",
    remark: "หมายเหตุ",
    addItem: "เพิ่มสินค้า",
    search: "ค้นหา",
    filterCategory: "กรองหมวดหมู่",
    noItems: "ไม่พบรายการสินค้า",
    actions: "จัดการ",
    totalValue: "มูลค่ารวม ฿",
    lowStockWarning: "สินค้าใกล้หมด กรุณาสั่งเพิ่ม",
    lastUpdated: "อัปเดตล่าสุด",
    placeholderItem: "เช่น Singha Beer",
    placeholderUnit: "ขวด / กระป๋อง / กก.",
    placeholderAuto: "เว้นว่างเพื่อคำนวณอัตโนมัติ",
    placeholderSupplier: "ชื่อซัพพลายเออร์",
    placeholderRemark: "หมายเหตุ",
    placeholderSearch: "ค้นหาสินค้า ซัพพลายเออร์ หรือหมายเหตุ",
    calc: "คำนวณ",
    delete: "ลบ",
    store: "สโตร์",
    bar: "บาร์",
    enterItem: "กรุณาใส่ชื่อสินค้า",
    validTransferQty: "กรุณาใส่จำนวนโอนที่ถูกต้อง",
    differentLocations: "กรุณาเลือกต้นทางและปลายทางให้ต่างกัน",
    itemNotFound: "ไม่พบสินค้า",
    notEnoughStock: "มีสต็อกไม่เพียงพอ",
  },
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function escapeCSV(value) {
  const text = String(value ?? "");
  if (text.includes(",") || text.includes("\n") || text.includes('"')) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function makeLinkedKey(item) {
  return `${String(item.name).trim().toLowerCase()}__${String(item.unit).trim().toLowerCase()}`;
}

function getFilteredItems(items, search, category) {
  const cleanSearch = search.trim().toLowerCase();
  return items.filter((item) => {
    const name = String(item.name || "").toLowerCase();
    const supplier = String(item.supplier || "").toLowerCase();
    const remark = String(item.remark || "").toLowerCase();
    const matchesSearch = !cleanSearch || name.includes(cleanSearch) || supplier.includes(cleanSearch) || remark.includes(cleanSearch);
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });
}

function getLowStockCount(items) {
  return items.filter((item) => Number(item.stock) <= Number(item.lowStock)).length;
}

function getTotalValue(items) {
  return items.reduce((sum, item) => sum + Number(item.stock || 0) * Number(item.cost || 0), 0);
}

function getTotalSold(items) {
  return items.reduce((sum, item) => sum + Number(item.sell || 0), 0);
}

function runTests() {
  const testItems = [
    { name: "Beer A", category: "Beer", start: 10, order: 5, sell: 10, stock: 5, lowStock: 10, cost: 20, supplier: "Supplier One", remark: "" },
    { name: "Whisky B", category: "Whisky", start: 12, order: 0, sell: 0, stock: 12, lowStock: 5, cost: 100, supplier: "Supplier Two", remark: "" },
    { name: "Soda C", category: "Mixer", start: 3, order: 0, sell: 3, stock: 0, lowStock: 3, cost: 10, supplier: "Supplier Three", remark: "special" },
  ];

  return [
    { name: "Search finds item by name", pass: getFilteredItems(testItems, "beer", "All").length === 1 },
    { name: "Search finds item by remark", pass: getFilteredItems(testItems, "special", "All").length === 1 },
    { name: "Category filter works", pass: getFilteredItems(testItems, "", "Whisky").length === 1 },
    { name: "Low stock count is correct", pass: getLowStockCount(testItems) === 2 },
    { name: "Total stock value is correct", pass: getTotalValue(testItems) === 1300 },
    { name: "Total sold is correct", pass: getTotalSold(testItems) === 13 },
    { name: "Linked key matches same item/unit", pass: makeLinkedKey({ name: "Singha Beer", unit: "Bottle" }) === makeLinkedKey({ name: " singha beer ", unit: "bottle" }) },
    { name: "CSV escaping handles commas", pass: escapeCSV("Beer, Bottle") === '"Beer, Bottle"' },
  ];
}

export default function WelaInventoryApp() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  const [barItems, setBarItems] = useState(barStartingItems);
  const [storeItems, setStoreItems] = useState(storeStartingItems);
  const [activeTab, setActiveTab] = useState("bar");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showTests, setShowTests] = useState(false);
  const [transfer, setTransfer] = useState({ itemKey: makeLinkedKey(barStartingItems[0]), from: "store", to: "bar", qty: "" });
  const [transferLog, setTransferLog] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "Beer",
    unit: "bottle",
    start: "",
    order: "",
    sell: "",
    stock: "",
    lowStock: "",
    cost: "",
    supplier: "",
    remark: "",
  });

  const currentItems = activeTab === "bar" ? barItems : storeItems;
  const currentSetter = activeTab === "bar" ? setBarItems : setStoreItems;
  const filteredItems = useMemo(() => getFilteredItems(currentItems, search, category), [currentItems, search, category]);
  const allLinkedItems = useMemo(() => {
    const map = new Map();
    [...barItems, ...storeItems].forEach((item) => {
      const key = makeLinkedKey(item);
      if (!map.has(key)) map.set(key, item);
    });
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [barItems, storeItems]);

  const barValue = useMemo(() => getTotalValue(barItems), [barItems]);
  const storeValue = useMemo(() => getTotalValue(storeItems), [storeItems]);
  const currentLowStockCount = useMemo(() => getLowStockCount(currentItems), [currentItems]);
  const currentSold = useMemo(() => getTotalSold(currentItems), [currentItems]);
  const testResults = useMemo(() => runTests(), []);
  const allTestsPassed = testResults.every((test) => test.pass);

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function getItemByKey(items, key) {
    return items.find((item) => makeLinkedKey(item) === key);
  }

  function getOrCreateLinkedItem(items, template) {
    const key = makeLinkedKey(template);
    const found = getItemByKey(items, key);
    if (found) return { items, item: found };
    const newItem = {
      ...template,
      id: Date.now() + Math.floor(Math.random() * 10000),
      start: 0,
      order: 0,
      sell: 0,
      stock: 0,
      lowStock: template.lowStock || 0,
      remark: "Auto-created from linked transfer",
      lastUpdated: today(),
    };
    return { items: [newItem, ...items], item: newItem };
  }

  function addItem() {
    const start = Number(form.start || 0);
    const order = Number(form.order || 0);
    const sell = Number(form.sell || 0);
    const calculatedStock = start + order - sell;
    const stock = form.stock === "" ? calculatedStock : Number(form.stock);
    const lowStock = Number(form.lowStock || 0);
    const cost = Number(form.cost || 0);

    if (!form.name.trim()) {
      alert(t.enterItem);
      return;
    }

    const numberFields = { start, order, sell, stock, lowStock, cost };
    for (const [field, value] of Object.entries(numberFields)) {
      if (!Number.isFinite(value) || value < 0) {
        alert(`Please enter a valid ${field} number.`);
        return;
      }
    }

    const newItem = {
      id: Date.now(),
      name: form.name.trim(),
      category: form.category,
      unit: form.unit.trim() || "unit",
      start,
      order,
      sell,
      stock,
      lowStock,
      cost,
      supplier: form.supplier.trim() || "-",
      remark: form.remark.trim(),
      lastUpdated: today(),
    };

    currentSetter((current) => [newItem, ...current]);
    setForm({ name: "", category: "Beer", unit: "bottle", start: "", order: "", sell: "", stock: "", lowStock: "", cost: "", supplier: "", remark: "" });
  }

  function updateList(setter, updater) {
    setter((current) => current.map(updater));
  }

  function adjustStock(id, amount) {
    updateList(currentSetter, (item) => {
      if (item.id !== id) return item;
      const nextStock = Math.max(0, Number(item.stock) + amount);
      return { ...item, stock: nextStock, lastUpdated: today() };
    });
  }

  function updateItemField(id, field, value) {
    updateList(currentSetter, (item) => {
      if (item.id !== id) return item;
      const numericFields = ["start", "order", "sell", "stock", "lowStock", "cost"];
      return { ...item, [field]: numericFields.includes(field) ? Number(value || 0) : value, lastUpdated: today() };
    });
  }

  function updateItemValue(id, value) {
    updateList(currentSetter, (item) => {
      if (item.id !== id) return item;
      const totalValue = Number(value || 0);
      const stock = Number(item.stock || 0);
      const cost = stock > 0 ? totalValue / stock : 0;
      return { ...item, cost, lastUpdated: today() };
    });
  }

  function recalculateStock(id) {
    updateList(currentSetter, (item) => {
      if (item.id !== id) return item;
      const stock = Math.max(0, Number(item.start || 0) + Number(item.order || 0) - Number(item.sell || 0));
      return { ...item, stock, lastUpdated: today() };
    });
  }

  function deleteItem(id) {
    currentSetter((current) => current.filter((item) => item.id !== id));
  }

  function performTransfer() {
    const qty = Number(transfer.qty || 0);
    if (!Number.isFinite(qty) || qty <= 0) {
      alert(t.validTransferQty);
      return;
    }
    if (transfer.from === transfer.to) {
      alert(t.differentLocations);
      return;
    }

    const sourceItems = transfer.from === "bar" ? barItems : storeItems;
    const destItems = transfer.to === "bar" ? barItems : storeItems;
    const sourceItem = getItemByKey(sourceItems, transfer.itemKey);
    const template = sourceItem || getItemByKey(destItems, transfer.itemKey);

    if (!template) {
      alert(t.itemNotFound);
      return;
    }
    if (!sourceItem || Number(sourceItem.stock) < qty) {
      alert(`${transfer.from === "bar" ? t.bar : t.store} ${t.notEnoughStock}`);
      return;
    }

    const updatedSourceItems = sourceItems.map((item) => {
      if (makeLinkedKey(item) !== transfer.itemKey) return item;
      return { ...item, stock: Number(item.stock) - qty, lastUpdated: today() };
    });

    const createdDest = getOrCreateLinkedItem(destItems, template);
    const updatedDestItems = createdDest.items.map((item) => {
      if (makeLinkedKey(item) !== transfer.itemKey) return item;
      return {
        ...item,
        stock: Number(item.stock) + qty,
        order: transfer.to === "bar" ? Number(item.order || 0) + qty : Number(item.order || 0),
        lastUpdated: today(),
      };
    });

    if (transfer.from === "bar") {
      setBarItems(updatedSourceItems);
      setStoreItems(updatedDestItems);
    } else {
      setStoreItems(updatedSourceItems);
      setBarItems(updatedDestItems);
    }

    setTransferLog((current) => [
      { id: Date.now(), date: today(), item: template.name, qty, from: transfer.from, to: transfer.to, unit: template.unit },
      ...current,
    ]);
    setTransfer((current) => ({ ...current, qty: "" }));
  }

  function exportCSV() {
    const headers = ["Location", "Name", "Category", "Unit", "Start", "Order", "Sell", "Stock", "Low Stock Alert", "Cost", "Total Value", "Supplier", "Remark", "Last Updated"];
    const rows = [
      ...barItems.map((item) => ["Bar", item.name, item.category, item.unit, item.start, item.order, item.sell, item.stock, item.lowStock, item.cost, Number(item.stock) * Number(item.cost), item.supplier, item.remark, item.lastUpdated]),
      ...storeItems.map((item) => ["Store", item.name, item.category, item.unit, item.start, item.order, item.sell, item.stock, item.lowStock, item.cost, Number(item.stock) * Number(item.cost), item.supplier, item.remark, item.lastUpdated]),
    ];

    const csv = [headers, ...rows].map((row) => row.map(escapeCSV).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "wela-linked-bar-store-inventory.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4 text-white md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-purple-900 to-slate-900 p-6 shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-200">{t.linkedInventoryApp}</p>
            <h1 className="mt-2 text-3xl font-bold md:text-5xl">{t.title}</h1>
            <p className="mt-2 text-slate-300">{t.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setLanguage(language === "en" ? "th" : "en")} className="rounded-2xl bg-amber-400 px-4 py-3 font-semibold text-slate-950 hover:bg-amber-300">
              {language === "en" ? "ภาษาไทย" : "English"}
            </button>
            <button onClick={() => setShowTests((value) => !value)} className="rounded-2xl border border-white/20 px-4 py-3 font-semibold text-white hover:bg-white/10">
              {showTests ? t.hideTests : t.showTests}
            </button>
            <button onClick={exportCSV} className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 shadow hover:bg-slate-200">
              {t.exportCSV}
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <StatCard title={t.barItems} value={barItems.length} />
          <StatCard title={t.storeItems} value={storeItems.length} />
          <StatCard title={t.barValue} value={`฿${barValue.toLocaleString()}`} />
          <StatCard title={t.storeValue} value={`฿${storeValue.toLocaleString()}`} />
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">{t.transferTitle}</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            <SelectInput label={t.item} value={transfer.itemKey} onChange={(value) => setTransfer({ ...transfer, itemKey: value })} options={allLinkedItems.map((item) => ({ label: `${item.name} (${item.unit})`, value: makeLinkedKey(item) }))} />
            <SelectInput label={t.from} value={transfer.from} onChange={(value) => setTransfer({ ...transfer, from: value, to: value === "bar" ? "store" : "bar" })} options={[{ label: "Store", value: "store" }, { label: "Bar", value: "bar" }]} />
            <SelectInput label={t.to} value={transfer.to} onChange={(value) => setTransfer({ ...transfer, to: value })} options={[{ label: "Bar", value: "bar" }, { label: "Store", value: "store" }]} />
            <TextInput label={t.quantity} type="number" value={transfer.qty} onChange={(value) => setTransfer({ ...transfer, qty: value })} placeholder="0" />
            <div className="flex items-end">
              <button onClick={performTransfer} className="w-full rounded-2xl bg-emerald-500 px-4 py-3 font-bold text-white hover:bg-emerald-400">
                {t.transfer}
              </button>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-400">{t.transferExample}</p>
        </section>

        {transferLog.length > 0 && (
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
            <h2 className="mb-3 text-xl font-bold">{t.recentTransferLog}</h2>
            <div className="space-y-2">
              {transferLog.slice(0, 5).map((log) => (
                <div key={log.id} className="rounded-2xl bg-slate-950 p-3 text-sm text-slate-300">
                  {log.date}: {log.qty} {log.unit} {log.item} moved from {log.from.toUpperCase()} to {log.to.toUpperCase()}.
                </div>
              ))}
            </div>
          </section>
        )}

        {showTests && (
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold">{t.builtInTests}</h2>
              <span className={`rounded-full px-3 py-1 text-sm font-semibold ${allTestsPassed ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}`}>
                {allTestsPassed ? t.allPassed : t.someFailed}
              </span>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {testResults.map((test) => (
                <div key={test.name} className="flex items-center justify-between rounded-2xl bg-slate-950 p-3">
                  <span className="text-slate-300">{test.name}</span>
                  <span className={test.pass ? "text-green-300" : "text-red-300"}>{test.pass ? "PASS" : "FAIL"}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="flex flex-wrap gap-2 rounded-3xl border border-slate-800 bg-slate-900 p-3 shadow-lg">
          <button onClick={() => setActiveTab("bar")} className={`rounded-2xl px-5 py-3 font-bold ${activeTab === "bar" ? "bg-purple-500 text-white" : "bg-slate-950 text-slate-300 hover:bg-slate-800"}`}>
            {t.barInventory}
          </button>
          <button onClick={() => setActiveTab("store")} className={`rounded-2xl px-5 py-3 font-bold ${activeTab === "store" ? "bg-purple-500 text-white" : "bg-slate-950 text-slate-300 hover:bg-slate-800"}`}>
            {t.storeInventory}
          </button>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard title={`${activeTab === "bar" ? t.bar : t.store} ${t.products}`} value={currentItems.length} />
          <StatCard title={t.lowStockItems} value={currentLowStockCount} warning={currentLowStockCount > 0} />
          <StatCard title={t.totalSold} value={currentSold} />
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">{t.addNewItemTo} {activeTab === "bar" ? t.bar : t.store}</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <TextInput label={t.itemName} value={form.name} onChange={(value) => updateForm("name", value)} placeholder={t.placeholderItem} />
            <SelectInput label={t.category} value={form.category} onChange={(value) => updateForm("category", value)} options={categories.filter((item) => item !== "All")} />
            <TextInput label={t.unit} value={form.unit} onChange={(value) => updateForm("unit", value)} placeholder={t.placeholderUnit} />
            <TextInput label={t.start} type="number" value={form.start} onChange={(value) => updateForm("start", value)} placeholder="0" />
            <TextInput label={t.order} type="number" value={form.order} onChange={(value) => updateForm("order", value)} placeholder="0" />
            <TextInput label={t.sell} type="number" value={form.sell} onChange={(value) => updateForm("sell", value)} placeholder="0" />
            <TextInput label={t.stock} type="number" value={form.stock} onChange={(value) => updateForm("stock", value)} placeholder={t.placeholderAuto} />
            <TextInput label={t.lowStockAlert} type="number" value={form.lowStock} onChange={(value) => updateForm("lowStock", value)} placeholder="0" />
            <TextInput label={t.costPerUnit} type="number" value={form.cost} onChange={(value) => updateForm("cost", value)} placeholder="0" />
            <TextInput label={t.supplier} value={form.supplier} onChange={(value) => updateForm("supplier", value)} placeholder={t.placeholderSupplier} />
            <TextInput label={t.remark} value={form.remark} onChange={(value) => updateForm("remark", value)} placeholder={t.placeholderRemark} />
            <div className="flex items-end">
              <button onClick={addItem} className="w-full rounded-2xl bg-purple-500 px-4 py-3 font-bold text-white hover:bg-purple-400">
                {t.addItem}
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg md:flex-row">
          <TextInput label={t.search} value={search} onChange={setSearch} placeholder={t.placeholderSearch} />
          <SelectInput label={t.filterCategory} value={category} onChange={setCategory} options={categories} />
        </section>

        <section className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-300">No inventory items found.</div>
          ) : (
            filteredItems.map((item) => (
              <InventoryRow key={item.id} item={item} location={activeTab} t={t} onAdjust={adjustStock} onDelete={deleteItem} onUpdate={updateItemField} onUpdateValue={updateItemValue} onRecalculate={recalculateStock} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, warning = false }) {
  return (
    <div className={`rounded-3xl border p-5 shadow-lg ${warning ? "border-red-700 bg-red-950/50" : "border-slate-800 bg-slate-900"}`}>
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function TextInput({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="block w-full">
      <span className="mb-1 block text-sm text-slate-400">{label}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-purple-400" />
    </label>
  );
}

function SmallInput({ value, onChange, type = "number" }) {
  return <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-400" />;
}

function SelectInput({ label, value, onChange, options }) {
  const normalizedOptions = options.map((option) => (typeof option === "string" ? { label: option, value: option } : option));
  return (
    <label className="block w-full">
      <span className="mb-1 block text-sm text-slate-400">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-purple-400">
        {normalizedOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </label>
  );
}

function InventoryRow({ item, location, t, onAdjust, onDelete, onUpdate, onUpdateValue, onRecalculate }) {
  const isLow = Number(item.stock) <= Number(item.lowStock);
  const value = Number(item.stock || 0) * Number(item.cost || 0);
  return (
    <div className={`rounded-3xl border p-5 shadow-lg ${isLow ? "border-red-700 bg-red-950/50" : "border-slate-800 bg-slate-900"}`}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-3">
          <div className="mb-2 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-wide text-purple-200">{location === "bar" ? t.bar : t.store}</div>
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-sm text-slate-400">{item.category} · {item.unit}</p>
          <p className="text-xs text-slate-500">Supplier: {item.supplier}</p>
        </div>
        <NumberBox label={t.start} value={item.start} onChange={(value) => onUpdate(item.id, "start", value)} />
        <NumberBox label={t.order} value={item.order} onChange={(value) => onUpdate(item.id, "order", value)} />
        <NumberBox label={t.sell} value={item.sell} onChange={(value) => onUpdate(item.id, "sell", value)} />
        <NumberBox label={t.stock} value={item.stock} onChange={(value) => onUpdate(item.id, "stock", value)} highlight />
        <NumberBox label={t.lowStockAlert} value={item.lowStock} onChange={(value) => onUpdate(item.id, "lowStock", value)} />
        <div className="lg:col-span-2">
          <p className="mb-1 text-sm text-slate-400">{t.actions}</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => onAdjust(item.id, -1)} className="rounded-xl bg-slate-800 px-3 py-2 hover:bg-slate-700">-1</button>
            <button onClick={() => onAdjust(item.id, 1)} className="rounded-xl bg-slate-800 px-3 py-2 hover:bg-slate-700">+1</button>
            <button onClick={() => onRecalculate(item.id)} className="rounded-xl bg-purple-500/30 px-3 py-2 text-purple-100 hover:bg-purple-500/40">{t.calc}</button>
            <button onClick={() => onDelete(item.id)} className="rounded-xl bg-red-500/20 px-3 py-2 text-red-200 hover:bg-red-500/30">{t.delete}</button>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
        <div>
          <p className="mb-1 text-sm text-slate-400">{t.costPerUnit}</p>
          <SmallInput type="number" value={Number(item.cost || 0)} onChange={(value) => onUpdate(item.id, "cost", value)} />
        </div>
        <div>
          <p className="mb-1 text-sm text-slate-400">{t.totalValue}</p>
          <SmallInput type="number" value={Number(value.toFixed(2))} onChange={(newValue) => onUpdateValue(item.id, newValue)} />
        </div>
        <div className="md:col-span-2">
          <p className="text-sm text-slate-400">{t.remark}</p>
          <SmallInput type="text" value={item.remark || ""} onChange={(value) => onUpdate(item.id, "remark", value)} />
        </div>
      </div>
      {isLow && <p className="mt-4 rounded-2xl bg-red-500/20 p-3 text-sm font-semibold text-red-100">Low stock. Please reorder soon.</p>}
      <p className="mt-3 text-xs text-slate-500">{t.lastUpdated}: {item.lastUpdated}</p>
    </div>
  );
}

function NumberBox({ label, value, onChange, highlight = false }) {
  return (
    <div className="lg:col-span-1">
      <p className="mb-1 text-sm text-slate-400">{label}</p>
      <input type="number" value={value} onChange={(event) => onChange(event.target.value)} className={`w-full rounded-xl border px-3 py-2 text-white outline-none focus:border-purple-400 ${highlight ? "border-purple-500 bg-purple-950/40 font-bold" : "border-slate-700 bg-slate-950"}`} />
    </div>
  );
}
