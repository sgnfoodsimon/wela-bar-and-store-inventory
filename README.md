# Wela Bar + Store Inventory

A comprehensive inventory management system for bars and stores with dual inventory tracking, stock transfers, and bilingual support.

## ✨ Features

### Dual Inventory Management
- Separate tracking for Bar and Store inventory
- 42 pre-loaded bar items with categories
- Automatic store stock initialization

### Stock Management
- Real-time calculations (Start + Order - Sell = Stock)
- Low stock alerts and warnings
- Inventory valuation and cost tracking
- Quick adjust buttons (+1, -1)
- Recalculate stock from formula

### Inter-location Transfers
- Transfer stock between Bar and Store
- Automatic item creation on transfer
- Complete transfer history logging
- Linked item matching

### Search & Filtering
- Search by item name, supplier, or remarks
- Filter by category (Beer, Whisky, Spirits, Vodka, Wine, Mixer, Food, Other)
- Real-time filtering

### Data Export
- CSV export with all inventory data
- Includes both Bar and Store inventories
- Complete item details and valuations

### Bilingual Support
- Full English interface
- Complete Thai translations
- Easy language toggle

### Built-in Testing
- 8 built-in test cases
- Search, filtering, and calculation validation
- Instant test results

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sgnfoodsimon/wela-bar-and-store-inventory.git
cd wela-bar-and-store-inventory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📊 Pre-loaded Items (42 Total)

**Spirits:**
- Martell VSOP, Noblige, Gordon Bleu
- Hennessy XO 1L, VSOP
- Regency 350ml, 500ml
- Moutai

**Whisky:**
- Chivas 12Y, 18Y
- Jameson 700ml
- Blue, Gold, Black Labels
- Red Label, Red Label 1L
- Blend 285 1L

**Vodka:**
- Absolute Vodka, 0.20L
- Vodka Maxx

**Beer:**
- Heineken, Singha Beer, Singha Reserve
- Leo, Hoegaarden, Hoegaarden Roses
- Spy Kamikaze, Spy Butterfly Kiss
- Keg

**Wine:**
- Champagne

**Mixers:**
- Coke, Coke Zero, Sprite
- Tonic, Schweppes Lime
- Singha Lemon Soda, Soda
- Oishi Green Tea, Water

**Other:**
- Beer Jug, Beer Town
- ผ้าเย็น Cool Cloth

## 💻 Technology Stack

- **React 18.3** - UI framework
- **Vite 5.2** - Build tool
- **Tailwind CSS 3.4** - Styling
- **PostCSS** - CSS processing

## 📖 Usage

### Managing Inventory

1. **Switch Between Bar/Store**: Click the tabs at the top to switch between inventory sections
2. **Add New Items**: Fill the form and click "Add Item"
3. **Edit Items**: Click on any field to edit directly
4. **Quick Adjust**: Use +1/-1 buttons to quickly adjust stock
5. **Recalculate**: Use "Calc" button to recalculate stock from the formula

### Transfer Stock

1. **Select Item**: Choose the item from the dropdown
2. **Choose Direction**: Select From (Store/Bar) and To (Bar/Store)
3. **Enter Quantity**: Specify how many units to transfer
4. **Execute**: Click "Transfer" button
5. **Track**: View recent transfers in the log below

### Export Data

Click "Export CSV" button to download complete inventory data as CSV file.

### Test the System

Click "Show Tests" to view the built-in test suite. All tests should pass.

## 📁 Project Structure

```
wela-bar-and-store-inventory/
├── src/
│   ├── wela_bar_inventory.jsx    # Main React component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind styles
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── .gitignore                     # Git ignore rules
└── README.md                      # This file
```

## 📝 License

MIT
