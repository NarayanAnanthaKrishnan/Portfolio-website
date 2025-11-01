# 📁 Developer Portfolio Project Structure Explained

## 🎯 Overview
This is a **Next.js 15** React portfolio website with a modern, component-based architecture.

---

## 📂 Top-Level Folder Structure

```
developer-portfolio/
│
├── 📁 app/                    # Next.js 15 app directory (most important!)
├── 📁 public/                # Static files (images, icons)
├── 📁 utils/                  # Utility functions & data
├── 📁 .git/                   # Git version control
├── 📁 node_modules/           # Dependencies (don't touch!)
├── 📁 .next/                  # Next.js build output (auto-generated)
│
├── 📄 package.json            # Project config & dependencies
├── 📄 next.config.js          # Next.js configuration
└── 📄 tailwind.config.js      # Tailwind CSS styling config
```

---

## 🏗️ Detailed Folder Breakdown

### 1️⃣ **`/app` - Your Application Code** (Main Directory)

```
app/
├── 📁 components/          # React components (UI building blocks)
│   ├── homepage/           # Homepage sections
│   │   ├── about/          # About section
│   │   ├── education/       # Education section
│   │   ├── experience/      # Work experience
│   │   ├── projects/        # Portfolio projects
│   │   ├── skills/          # Skills showcase
│   │   └── hero-section/    # Hero/banner section
│   ├── footer.jsx          # Page footer
│   └── navbar.jsx          # Navigation bar
│
├── 📁 assets/              # Images, animations, SVGs
│   ├── lottie/            # Lottie animation JSON files
│   └── svg/               # SVG icons & graphics
│
├── 📁 api/                 # Backend API routes (server-side)
│   ├── contact/           # Contact form handler
│   └── google/            # Google integration
│
├── 📁 css/                 # Custom styles (SCSS)
├── 📄 layout.js           # Main app layout/wrapper
├── 📄 page.js             # Homepage component
└── 🖼️ icon.jpg            # Website favicon
```

**Key Files:**
- `layout.js` - Wraps all pages, defines global layout
- `page.js` - Your homepage (the actual content)

---

### 2️⃣ **`/public` - Static Assets**

```
public/
├── 📁 image/              # Project images
│   └── ...
├── 🖼️ profile.jpg         # Your profile photo
├── 🎨 hero.svg            # Hero background
└── 🎨 section.svg         # Section backgrounds
```

**Purpose:** Files here are served directly (accessible via `/filename.jpg`)

---

### 3️⃣ **`/utils` - Data & Utilities**

```
utils/
├── 📁 data/               # All your content data
│   ├── personal-data.js    # Your name, bio, links
│   ├── experience.js       # Work experience
│   ├── projects-data.js   # Portfolio projects
│   ├── educations.js       # Education history
│   ├── skills.js          # Your skills list
│   └── contactsData.js    # Contact information
│
├── skill-image.js         # Maps skill names to icons
└── check-email.js         # Email validation
```

**Why separate?** Keeps your content organized and easy to update!

---

## 🎯 How It All Works Together

### Development Flow:

1. **You edit code** in `/app/components/`
2. **Next.js** watches for changes
3. **Browser** auto-refreshes
4. **Hot reload** updates instantly

### Production Build:

1. **You run** `npm run build`
2. **Next.js** builds optimized version
3. **Deploy** to Vercel or your hosting platform
4. **Fast, optimized** for real users

---

## 🚀 Common Commands

```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
```

---

## 🎓 Key Concepts

| Concept | Description | File Location |
|---------|-------------|---------------|
| **Pages** | Your actual webpage content | `app/page.js` |
| **Components** | Reusable UI pieces | `app/components/` |
| **Data** | Your content (bio, projects) | `utils/data/` |
| **Assets** | Images, animations | `app/assets/` |
| **Layout** | Global wrapper | `app/layout.js` |
| **Config** | Project settings | `next.config.js` |

---

## 💡 Why Use Docker?

### Without Docker:
```
❌ "Works on my machine" problem
❌ Difficult to share exact environment
❌ Inconsistent setups between team members
```

### With Docker:
```
✅ Same environment everywhere
✅ Easy to deploy to any server
✅ Consistent builds
✅ Isolated from other projects
```

---

## 🎨 Tech Stack Summary

| Technology | Purpose |
|------------|---------|
| **Next.js** | React framework for web apps |
| **React** | JavaScript UI library |
| **Tailwind CSS** | Utility-first styling |
| **Node.js** | JavaScript runtime |
| **Lottie** | Animated graphics |

---

## 🔧 Want to Make Changes?

1. **Update Content:** Edit files in `utils/data/`
2. **Change Design:** Modify components in `app/components/`
3. **Add New Page:** Create new file in `app/`
4. **Update Styles:** Edit `app/css/` or use Tailwind classes

---

## 📝 Quick Tips

- ✅ **Never edit** `node_modules/` or `.next/`
- ✅ **Keep data in** `utils/data/` (easy to update)
- ✅ **Organize components** by feature
- ✅ **Run `npm run dev`** to see changes instantly

---

*Made with ❤️ by [Narayan Anantha Krishnan](https://github.com/NarayanAnanthaKrishnan)*


