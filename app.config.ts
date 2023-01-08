export default defineAppConfig({
  alpine: {
    title: 'Blog.',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 500,
      height: 500
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo_colour.png', // path of the logo
        pathDark: '/logo_colour.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'sun', // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'matthewtylerayl',
      instagram: 'sundayseshgolf',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/matthew-aylward-78976965/'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
