import { AdminPanelPlugin } from 'svelite-admin'
import * as modules from './modules'

const collections = [
    {
        "name": "Products",
        "slug": "products",
        "icon": "shopping-cart",
        "fields": [
            {
                "name": "name",
                "label": "Product Name",
                "type": "plain_text",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "description",
                "label": "Product Description",
                "type": "rich_text",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "price",
                "label": "Price",
                "type": "number",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "images",
                "label": "Product Images",
                "type": "image",
                "tab": "Media",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "category",
                "label": "Category",
                "type": "relation",
                "tab": "Categories",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            }
        ]
    },
    {
        "name": "Categories",
        "slug": "categories",
        "icon": "category",
        "fields": [
            {
                "name": "name",
                "label": "Category Name",
                "type": "plain_text",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "description",
                "label": "Category Description",
                "type": "rich_text",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "parent",
                "label": "Parent Category",
                "type": "relation",
                "tab": "Categories",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            }
        ]
    },
    {
        "name": "Orders",
        "slug": "orders",
        "icon": "shopping-cart",
        // "sidebar": (context) => context.user.role === 'admin' || context.user.role === 'seller',
        "fields": [
            {
                "name": "user",
                "label": "User",
                "type": "relation",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "products",
                "label": "Products",
                "type": "relation",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "status",
                "label": "Status",
                "type": "select",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                },
                "items": [
                    {
                        "key": "pending",
                        "value": "Pending"
                    },
                    {
                        "key": "processing",
                        "value": "Processing"
                    },
                    {
                        "key": "shipped",
                        "value": "Shipped"
                    },
                    {
                        "key": "delivered",
                        "value": "Delivered"
                    }
                ]
            }
        ]
    },
    {
        "name": "Users",
        "slug": "users",
        "icon": "user",
        "fields": [
            {
                "name": "name",
                "label": "Name",
                "type": "plain_text",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "email",
                "label": "Email",
                "type": "plain_text",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                }
            },
            {
                "name": "role",
                "label": "Role",
                "type": "select",
                "tab": "General",
                "visibility": {
                    "list": true,
                    "create": true,
                    "update": true
                },
                "items": [
                    {
                        "key": "admin",
                        "value": "Admin"
                    },
                    {
                        "key": "seller",
                        "value": "Seller"
                    },
                    {
                        "key": "customer",
                        "value": "Customer"
                    }
                ]
            }
        ]
    }
]

export default {
    plugins: [
       AdminPanelPlugin({
           collections,
           logo: '',
           theme: 'dark',
           dir: 'ltr',
           modules
            // admin panel config...
         }),
    ],
    // custom modules
    modules: {

    },
    // custom layouts
    layouts: {},
    pages: [
        {
            slug: 'hello', 
            title: 'Hello', 
            modules: [
                { name: "Header", props: {}},
                {
                    name: 'HelloWorld', 
                    props: {}
                }
            ]
        }
    ],
    api: 'http://localhost:3010/api'
}

export const config = {
    adapter: 'auto'

}
