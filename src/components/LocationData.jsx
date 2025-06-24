// Data file - regionData.js
import Select from 'react-select';
export const regionOptions = [
    // Greater Accra Region
    { value: 'Accra-GreaterAccra', label: 'Accra - Greater Accra' },
    { value: 'Tema-GreaterAccra', label: 'Tema - Greater Accra' },
    { value: 'Kasoa-GreaterAccra', label: 'Kasoa - Greater Accra' },
    { value: 'Madina-GreaterAccra', label: 'Madina - Greater Accra' },
    { value: 'Adenta-GreaterAccra', label: 'Adenta - Greater Accra' },
    { value: 'Ashaiman-GreaterAccra', label: 'Ashaiman - Greater Accra' },
    
    // Ashanti Region
    { value: 'Kumasi-Ashanti', label: 'Kumasi - Ashanti' },
    { value: 'Obuasi-Ashanti', label: 'Obuasi - Ashanti' },
    { value: 'Ejisu-Ashanti', label: 'Ejisu - Ashanti' },
    { value: 'Konongo-Ashanti', label: 'Konongo - Ashanti' },
    { value: 'Mampong-Ashanti', label: 'Mampong - Ashanti' },
    { value: 'Bekwai-Ashanti', label: 'Bekwai - Ashanti' },
    
    // Western Region
    { value: 'Takoradi-Western', label: 'Takoradi - Western' },
    { value: 'Tarkwa-Western', label: 'Tarkwa - Western' },
    { value: 'Axim-Western', label: 'Axim - Western' },
    { value: 'Prestea-Western', label: 'Prestea - Western' },
    { value: 'Bogoso-Western', label: 'Bogoso - Western' },
    
    // Central Region
    { value: 'Cape Coast-Central', label: 'Cape Coast - Central' },
    { value: 'Elmina-Central', label: 'Elmina - Central' },
    { value: 'Winneba-Central', label: 'Winneba - Central' },
    { value: 'Kasoa-Central', label: 'Kasoa - Central' },
    { value: 'Swedru-Central', label: 'Swedru - Central' },
    
    // Eastern Region
    { value: 'Koforidua-Eastern', label: 'Koforidua - Eastern' },
    { value: 'Akropong-Eastern', label: 'Akropong - Eastern' },
    { value: 'Begoro-Eastern', label: 'Begoro - Eastern' },
    { value: 'Mpraeso-Eastern', label: 'Mpraeso - Eastern' },
    { value: 'Somanya-Eastern', label: 'Somanya - Eastern' },
    
    // Northern Region
    { value: 'Tamale-Northern', label: 'Tamale - Northern' },
    { value: 'Yendi-Northern', label: 'Yendi - Northern' },
    { value: 'Savelugu-Northern', label: 'Savelugu - Northern' },
    { value: 'Tolon-Northern', label: 'Tolon - Northern' },
    
    // Upper East Region
    { value: 'Bolgatanga-UpperEast', label: 'Bolgatanga - Upper East' },
    { value: 'Navrongo-UpperEast', label: 'Navrongo - Upper East' },
    { value: 'Bawku-UpperEast', label: 'Bawku - Upper East' },
    { value: 'Paga-UpperEast', label: 'Paga - Upper East' },
    
    // Upper West Region
    { value: 'Wa-UpperWest', label: 'Wa - Upper West' },
    { value: 'Lawra-UpperWest', label: 'Lawra - Upper West' },
    { value: 'Jirapa-UpperWest', label: 'Jirapa - Upper West' },
    { value: 'Tumu-UpperWest', label: 'Tumu - Upper West' },
    
    // Volta Region
    { value: 'Ho-Volta', label: 'Ho - Volta' },
    { value: 'Hohoe-Volta', label: 'Hohoe - Volta' },
    { value: 'Keta-Volta', label: 'Keta - Volta' },
    { value: 'Aflao-Volta', label: 'Aflao - Volta' },
    { value: 'Kpando-Volta', label: 'Kpando - Volta' },
    
    // Brong Ahafo Region
    { value: 'Sunyani-BrongAhafo', label: 'Sunyani - Brong Ahafo' },
    { value: 'Techiman-BrongAhafo', label: 'Techiman - Brong Ahafo' },
    { value: 'Berekum-BrongAhafo', label: 'Berekum - Brong Ahafo' },
    { value: 'Dormaa-BrongAhafo', label: 'Dormaa - Brong Ahafo' },
    { value: 'Wenchi-BrongAhafo', label: 'Wenchi - Brong Ahafo' },
];



const customStyles = {
    control: (base, state) => ({
        ...base,
        minHeight: '44px',
        fontSize: window.innerWidth < 640 ? '14px' : '16px',
        borderColor: state.isFocused ? '#10b981' : '#d1d5db',
        borderRadius: '8px',
        borderWidth: '1px',
        boxShadow: state.isFocused ? '0 0 0 1px #10b981' : 'none',
        '&:hover': {
            borderColor: state.isFocused ? '#10b981' : '#9ca3af'
        },
        backgroundColor: '#ffffff',
        padding: '2px 4px'
    }),
    placeholder: (base) => ({
        ...base,
        color: '#6b7280',
        fontSize: window.innerWidth < 640 ? '14px' : '16px'
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: '#6b7280',
        '&:hover': {
            color: '#10b981'
        }
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? '#f0fdf4' : 'white',
        color: state.isFocused ? '#065f46' : '#374151',
        '&:hover': {
            backgroundColor: '#f0fdf4',
            color: '#065f46'
        }
    }),
    menu: (base) => ({
        ...base,
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb'
    }),
    menuList: (base) => ({
        ...base,
        borderRadius: '8px',
        padding: '4px',
        maxHeight: '200px'
    })
};

export default function RegionSelect({ value, onChange, placeholder = "Select Location" }) {
    return (
        <Select             
            options={regionOptions}
            value={value}
            onChange={onChange}
            name='location'           
            placeholder={placeholder}             
            className="basic-single-select outline-none"             
            classNamePrefix="select"
            styles={customStyles}
            isSearchable={true}
            isClearable={true}
        />
    );
}