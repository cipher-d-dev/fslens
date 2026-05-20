# Fisayo's Portfolio

## 🚀 Key Features Breakdown

### 1. Orchestrated Scroll-Driven Storytelling (`TopScenes.tsx` & `HeroScene.tsx`)
* **Scattered-to-Linear Convergence:** On load, the landing page presents a dynamic, asymmetrical layer arrangement of scattered media assets (`hero-img-0` through `hero-img-4`), conveying raw creative energy.
* **Timeline Pinning & Staggering:** Driven by `GSAP ScrollTrigger`, scrolling pins the viewport and seamlessly pulls the chaotic image arrays together into a unified horizontal line, creating a smooth visual narrative.
* **Cinematic Transition:** Once alignment locks, side images split outwards while the text and center asset slide upward, initiating an alpha-fade cross-dissolve to reveal the next phase (`ApproachScene`).

### 2. Interactive Asset Slider Control (`ApproachScene.tsx`)
* **Dynamic Highlight Tracking:** Features a clean, accessible pill-shaped navigation hub that computes layout dimensions dynamically via a custom `useEffect` tracking loop and `getBoundingClientRect` equivalents (`offsetLeft`/`offsetWidth`).
* **Fluid Easing Profiles:** The sliding pill background transitions using custom cubic-bezier curves (`cubic-bezier(0.4, 0, 0.2, 1)`) matched with standard absolute layer fades for instant, performant content toggling.

### 3. Real-time Split Screen Color Grading Canvas (`BeforeAfterScene.tsx`)
* **Precise Input Mapping:** Bypasses generic HTML slider ranges to leverage native, low-overhead mouse and touch interaction handlers (`mousedown`, `touchstart`, `mousemove`, `touchmove`).
* **Hardware Accelerated Clipping Masks:** Computes percentages relative to the component bounds instantly, updating an asset overlay using a GSAP-smoothed dynamic CSS `clipPath` (`inset(0 ... 0 0)`). Perfect for displaying the contrast between raw LOG footage and final color grades.

### 4. Continuous Horizontal Smooth Track (`FeaturesScene.tsx`)
* **Adaptive Track Extents:** Utilizes responsive window-delta algorithms to map a multi-card container horizontally based on vertical scroll displacement.
* **Hardware-Accelerated Marquee Fallback:** Built on top of GSAP's optimization layout paradigms, it auto-calculates total track width (`track.scrollWidth`) minus viewport parameters to dynamically handle cross-browser layout bounds.

### 5. Multi-Layered Magnetized Custom Cursor (`CustomCursor.tsx`)
* **Differential Latency System:** Features a dual-element cursor design. An immediate focus dot handles frame-perfect pinpoint positioning via zero-duration parameters, while a larger tracking ring follows with a decoupled elastic delay (`power3.out`).
* **Intelligent Filter Shifting:** Dynamically tracks interactive items (`a`, `button`, inputs, or custom `data-cursor-hover` nodes), modifying active ring dimensions, blending rules (`mix-blend-difference`), and invoking backdrop filters (`blur(4px)`).

---

## 📂 Component Directory & System Architecture


```

````text
File written successfully.

```bash
├── components/
│   ├── ui/
│   │   └── CustomCursor.tsx       # Magnetized double-layer cursor + interactive filters
│   ├── ApproachScene.tsx          # Dynamic slider tab panel with dynamic bounds highlight
│   ├── BeforeAfterScene.tsx       # LOG-to-Graded split clipping comparison frame
│   ├── FeaturesScene.tsx          # Multi-card horizontal track pin-scroll system
│   ├── FooterScene.tsx            # Grid-mapped design footer with typography scaling
│   ├── HeroScene.tsx              # Split staggered multi-dimensional landing viewport
│   ├── KeepScrolling.tsx          # Dynamic opacity context-aware prompt pill
│   ├── MarqueeScene.tsx           # High-performance infinite typographic ribbon
│   └── TopScenes.tsx              # Timeline orchestrator linking Hero and Approach blocks

````

### Technical Blueprint Interaction Mapping

```
   [ User Scroll Input ]
             │
             ├──► [ TopScenes Orchestrator ] ──► Transforms / Aligns Scattered Hero Images
             │                                   └──► Cross-fades into Approach Scene
             │
             ├──► [ KeepScrolling Pill ]     ──► Fades out automatically past context thresholds
             │
             └──► [ FeaturesScene Track ]    ──► Translates vertical scroll into horizontal track shifting

```

---

## 🛠️ Technology Stack & Dependencies

- **Framework:** Next.js (App Router Configuration, Client-Side Optimization Layouts)
- **Animation Engines:** \* GSAP (GreenSock Animation Platform Core)
- ScrollTrigger (Viewport tracking & timeline pinning)
- `@gsap/react` (Hook integrations ensuring stable lifecycle cleanup via `useGSAP`)

- **Styling & Layout:** Tailwind CSS (Fluid utility layers, dark-mode configuration, responsive aspect framing)
- **Smooth Scrolling Integration:** Lenis Scroll Provider wrapper ensuring uniform easing across browsers
- **Icons & Assets:** Lucide React & Next.js Optimized Image Vectors

---

## ⚙️ Installation & Development Environment Setup

### 1. Clone the Codebase

```bash
git clone [https://github.com/your-username/fslens-landing.git](https://github.com/your-username/fslens-landing.git)
cd fslens-landing

```

### 2. Install Project Dependencies

Ensure you have Node.js installed (v18.x or higher recommended). Execute:

```bash
npm install
# or
yarn install
# or
pnpm install

```

### 3. Run the Local Development Server

Boot up the concurrent bundling tracker locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your modern browser environment to view the compilation pipeline.

---

## 💡 Engineering Best Practices Implemented

- **Strict Garbage Collection:** The custom mouse/touch event instances in `BeforeAfterScene.tsx` and custom custom-cursor tracking variables explicitly clean up during unmount wrappers via `removeEventListener` blocks and `ctx.revert()` loops, avoiding serious memory leaks.
- **Layout Stability:** Heavy use of Next.js `<Image />` optimization with predefined container aspects preventing sudden Layout Shifts (CLS) while remote stock assets fetch asynchronously.
- **Media Query Isolation:** Horizontal pins and tracking structures use GSAP's modern `matchMedia()` API definitions. This blocks layout distortions by forcing horizontal pin mechanics to execute _only_ on non-touch desktop breakpoints (`min-width: 768px`).
  """
