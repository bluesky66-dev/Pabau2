import clinicImage from '../../../assets/images/our-clinic.png'
import developerImage from '../../../assets/images/developer.png'
import financialImage from '../../../assets/images/financial.png'
import marketingImage from '../../../assets/images/marketing.png'
import clinicalImage from '../../../assets/images/clinical.png'
import servicesImage from '../../../assets/images/services.png'

export const data = [
    {
        title: 'Our clinic',
        subDataTitles: [
            'Bussiness Details',
            'Users',
            'Locations',
            'General settings',
            'Integrations',
            'Data',
            'Pabau Subscription'
        ],
        image: clinicImage
    },
    {
        title: 'Services',
        subDataTitles: [
            'Services',
            'Products',
            'Packages',
            'Gift Vouchers',
            'Resources',
            'Online Booking',
        ],
        image: servicesImage
    },
    {
        title: 'Clinical',
        subDataTitles: [
            'Care Pathways',
            'Medical form templates',
            'Diagnostic Codes',
            'Labs',
            'Drugs',
            'Medical Conditions',
            'Vaccine',
            'Body Charts'
        ],
        image: clinicalImage
    },
    {
        title: 'Marketing & Communication',
        subDataTitles: [
            'Communications',
            'Client Portal',
            'Feedback Survey',
            'Lead Forms',
            'Marketing Sources'
        ],
        image: marketingImage
    },
    {
        title: 'Financials',
        subDataTitles: [
            'Payment Processing',
            'Discounts',
            'Taxes',
            'Invoice Templates',
            'Payment Types',
            'Contract Pricing',
            'Cancellation Policy',
            'Petty Cash Types'
        ],
        image: financialImage
    },
    {
        title: 'Developer & Other',
        subDataTitles: [
            'Webhooks',
            'API keys',
            'Credit Note Types',
            'Departments',
            'Field Capture Labels',
            'Block Out Options',
            'Appointment Statuses',
            'Lead Groups'
        ],
        expandTitle: [
            'Salutations',
            'Training titles',
            'Titles',
            'Photo Uploader',
            'Cancellation Reasons',
            'Lead views',
            'Lead groups',
            'Lead assignment rules',
            'Family relationships',
            'Doc label manager',
            'Departments',
            'Invoice distribution',
            'Issuing companies',
            'Commission sheet',
            'Job statues',
            'Supplier categories',
            'Collapse'
        ],
        isExpand: true,
        image: developerImage
    }
]