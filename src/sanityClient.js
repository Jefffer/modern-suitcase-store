import {createClient} from '@sanity/client'

export default createClient({
  // IMPORTANTE:  datos del proyecto de Sanity
  projectId: 'qr2s0ndx', 
  dataset: 'production', 
  useCdn: true, // `false` si quieres datos frescos siempre
  apiVersion: '2025-06-11', 
})