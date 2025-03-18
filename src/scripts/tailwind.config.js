tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'work-sans': ['Work Sans', 'sans-serif'],
            }, 
            colors: { 
                'deep-purple':'#16006D',
                'indigo':'#3843D0',
                'cornflower-blue':'#5D70D2',
                'sky':'#8EA1FF',
                'sunset':'#E44434',
                'mango':'#FC5F36',
                'marigold':'#FEAF31',
                'black-grey':'#0F172A',
                'blue-light':'#94A3B8',
                'sunset-light':'#FC5F3633',
                'border-light':' #E2E8F0',
            },
            spacing: {  
                '15': '60px',  
              },
              maxHeight: {  
                '150': '600px'
              },
              width: {  
                '30p': '30%',  
              },
              flex: {  
                '70p': '70%',  
              },
              zIndex: {  
                '9999': '9999',  
              },
              gridTemplateColumns: {  
                '3fr-1fr': '3fr 1fr',  
              },
        },
    },
}