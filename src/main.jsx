import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import Root from './router/index'

createRoot(document.getElementById('root')).render(
    <Root />
)
