/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      maxWidth: {
        'content': '680px',
        'content-wide': '900px',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Lora, Georgia, serif',
            color: '#1a1a1a',
            fontSize: '20px',
            lineHeight: '1.75',
            letterSpacing: '-0.003em',
            '--tw-prose-body': '#1a1a1a',
            '--tw-prose-headings': '#1a1a1a',
            '--tw-prose-links': '#1a1a1a',
            '--tw-prose-bold': '#1a1a1a',
            '--tw-prose-code': '#1a1a1a',
            a: {
              color: '#1a1a1a',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(26, 26, 26, 0.25)',
              textUnderlineOffset: '2px',
              '&:hover': {
                textDecorationColor: 'rgba(26, 26, 26, 0.6)',
              },
            },
            h1: {
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              lineHeight: '1.3',
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
            },
            h2: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '1.3',
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
              marginTop: '64px',
              marginBottom: '24px',
            },
            h3: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '26px',
              fontWeight: '600',
              lineHeight: '1.3',
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
              marginTop: '48px',
              marginBottom: '24px',
            },
            h4: {
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              lineHeight: '1.3',
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
            },
            h5: {
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              lineHeight: '1.3',
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
            },
            h6: {
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              lineHeight: '1.3',
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
            },
            p: {
              color: '#1a1a1a',
              marginBottom: '48px',
              '&:last-child': {
                marginBottom: '0',
              },
            },
            ul: {
              marginBottom: '48px',
              paddingLeft: '48px',
              '&:last-child': {
                marginBottom: '0',
              },
            },
            ol: {
              marginBottom: '48px',
              paddingLeft: '48px',
              '&:last-child': {
                marginBottom: '0',
              },
            },
            li: {
              marginBottom: '24px',
              '&:last-child': {
                marginBottom: '0',
              },
            },
            blockquote: {
              borderLeftColor: '#e0e0e0',
              borderLeftWidth: '2px',
              paddingLeft: '48px',
              marginTop: '48px',
              marginBottom: '48px',
              fontStyle: 'italic',
              color: '#666',
              '&:last-child': {
                marginBottom: '0',
              },
            },
            code: {
              backgroundColor: '#f8f8f8',
              color: '#1a1a1a',
              padding: '0.15em 0.4em',
              borderRadius: '3px',
              fontSize: '0.9em',
              fontFamily: '"Courier New", monospace',
            },
            pre: {
              backgroundColor: '#f8f8f8',
              color: '#1a1a1a',
              padding: '48px',
              borderRadius: '4px',
              overflowX: 'auto',
              marginTop: '48px',
              marginBottom: '48px',
              lineHeight: '1.6',
              '&:last-child': {
                marginBottom: '0',
              },
              code: {
                backgroundColor: 'transparent',
                padding: '0',
              },
            },
            img: {
              maxWidth: '100%',
              height: 'auto',
              marginTop: '64px',
              marginBottom: '64px',
              '&:last-child': {
                marginBottom: '0',
              },
            },
            strong: {
              fontWeight: '600',
              color: '#1a1a1a',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

