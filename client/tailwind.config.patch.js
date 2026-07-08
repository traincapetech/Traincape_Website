/**
 * Design System Tailwind Config Patch
 * 
 * To integrate the new design tokens into the Traincape Technology project,
 * merge these configurations into tailwind.config.js.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        // Theme variables reading directly from standard HSL variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          hover: 'hsl(var(--primary-hover))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          hover: 'hsl(var(--secondary-hover))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          hover: 'hsl(var(--accent-hover))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        
        // System Feedback states
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        danger: 'hsl(var(--danger))',
        info: 'hsl(var(--info))',
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
          foreground: 'hsl(var(--disabled-foreground))',
        }
      },
      borderRadius: {
        // Linear scale for border radiuses
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        // Soft elevation shadows
        'elevation-xs': '0 1px 2px rgba(0,0,0,0.05)',
        'elevation-sm': '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        'elevation-md': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        'elevation-lg': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        'elevation-xl': '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      },
      fontFamily: {
        // Pairing modern typeface Inter with Space Grotesk
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      transitionTimingFunction: {
        // Custom premium ease curves
        'hover-curve': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-curve': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      transitionDuration: {
        'hover-duration': '200ms',
        'accordion-duration': '300ms',
      }
    },
  },
}
