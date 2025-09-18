# NSBLPA Prototype

A responsive, mobile-first redesign for NSBLPA.com, inspired by NFL.com and Directory Hub. This prototype showcases the National Sales Bet League Professional Association with a clean, professional design.

## 🚀 Quick Start

### GitHub Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** to your local machine:

   ```bash
   git clone https://github.com/YOUR_USERNAME/nsblpa-prototype.git
   cd nsblpa-prototype
   ```

### Running Locally

#### Option 1: Direct File Opening (Simplest)

````bash
# Navigate to the project directory
cd nsblpa-prototype


#### Option 2: Local Web Server (Recommended for Development)

```bash
# Using Python 3
python -m http.server 8000



# Using PHP
php -S localhost:8000

# Using Live Server (VS Code extension)
# Right-click on index.html and select "Open with Live Server"
````

Then visit `http://localhost:8000` in your browser.

### Development Workflow

1. **Make changes** to HTML, CSS, or JS files
2. **Test locally** using one of the methods above
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
4. **Create Pull Request** if contributing to the main repository

## 🛠️ Development Setup

### File Structure

nsblpa-prototype/
index.html # Homepage with hero and quick links
teams.html # Team grid with external links
apps.html # Mobile apps organized by category
ownership.html # Investment and ownership information
contact.html # Contact form and information
assets/
styles.css # Main stylesheet (CSS3 with custom properties)
scripts.js # Vanilla JavaScript functionality
README.md # This file

### Testing Checklist

- [ ] Test on mobile devices (320px+)
- [ ] Test on tablet (768px+)
- [ ] Test on desktop (1024px+)
- [ ] Verify all external links work
- [ ] Check form validation
- [ ] Test mobile menu functionality
- [ ] Validate HTML/CSS

## 🎨 Design Decisions

### Color Scheme (Updated - Light Professional Theme)

- **Primary**: Blue (#2563eb) - Professional and trustworthy
- **Accent**: Orange (#f59e0b) - Energy and excitement
- **Background**: Light gray (#f8fafc) - Clean and modern
- **Cards**: White (#ffffff) - Clean and professional
- **Text**: Dark gray (#1e293b) - High contrast for readability
- **Borders**: Light gray (#e2e8f0) - Subtle definition

### Layout

- **Mobile-First**: Designed for mobile devices first, then enhanced for larger screens
- **Grid System**: CSS Grid for flexible, responsive layouts
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Container**: Max-width 1200px with proper margins for optimal reading experience
- **Card Design**: Clean white cards with subtle shadows (Directory Hub inspired)

## 🔧 Technical Features

### HTML5

- Semantic markup for accessibility
- Proper meta tags for SEO
- ARIA labels for screen readers

### CSS3

- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables)
- Smooth transitions and animations
- Print stylesheet

### JavaScript (ES6)

- Vanilla JavaScript (no frameworks)
- Mobile menu toggle
- Form validation and submission
- Smooth scrolling
- Intersection Observer for animations

## 🚀 Deployment Options

### GitHub Pages (Free)

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:

   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save and wait for deployment

3. **Access your site**: `https://YOUR_USERNAME.github.io/nsblpa-prototype`

### Netlify (Free)

1. **Connect GitHub repository**:

   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository

## 🌐 External Links

### Team Websites

All team links point to their respective external websites:

- [New York Profit Pursuers](https://newyorkprofitpursuers.com/)
- [Atlanta Revenue Rockstars](https://atlantarevenuerockstars.com/)
- [Denver Deal Dynamos](https://denverdealdynamos.com/)
- [Chicago Sales Sharks](https://chicagosalessharks.com/)
- [Texas Dealmakers Team](https://texasdealmakersteam.com/)
- [DC Sales Eagles](https://dcsaleseagles.com/)
- [Miami Revenue Runners](https://miamirevenuerunners.com/)

### Android Apps

All app links point to Google Play Store:

- **Main Apps**: 7 team-specific applications
- **Fan Apps**: 7 fan-focused applications
- **League Apps**: 5 professional/administrative applications

## 📝 Content Sections

# Homepage (index.html)

- Hero section introducing NSBLPA
- Quick links to Teams & Apps

# Teams (teams.html)

- Grid of all 7 teams with external links

# Apps (apps.html)

- Main/Team apps (7 apps)
- Fan apps (7 apps)
- League/Ownership/Network apps (5 apps)

# Ownership (ownership.html)

- Ownership structure
- Investment opportunities
- Investment inquiry form

### Contact (contact.html)

- Contact form with validation
- Contact information

##Development Status

##Completed Features

- Responsive mobile-first design
- Clean professional light theme
- All 5 HTML pages with proper content
- Team grid with external links
- Mobile apps organized by category
- Contact form with validation
- Investment/ownership information
- Mobile menu functionality
- Smooth animations and hover effects
- Cross-browser compatibility
