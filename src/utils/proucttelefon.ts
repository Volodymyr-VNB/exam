export type Telefon = {
    id:number
    title   :string
    titleAll:string
    val    : string
    price    :number
    
}
const telefonArray: Telefon[] =[
    {
        id:1,
        title   :'iPhone 12',
        titleAll:'This is iPhone 12 : Built-in memory 128 GB, RAM 6 GB, Display Super Retina (OLED),CPU Apple A14 Bionic, Neural Engine,Camera Triple 12 MP (f/2.4)+12 MP (f/1.6)+12 MP (f/2.2), autofocus, 12x digital zoom, True Tone flash with Slow Sync, HDR video recording 60fps, slow-mo 1080p 240fps / TrueDepth 12MP f/2.2',
        val    : 'EUR' ,
        price    :750,
        
    },
    {
        id:2,
        title   :'iPhone 8',
        titleAll:'This is iPhone 8 : Built-in memory 256 GB, RAM 16 GB, Display Super Retina (OLED),CPU Apple A14 Bionic, Neural Engine,Camera Triple 12 MP (f/2.4)+12 MP (f/1.6)+12 MP (f/2.2), autofocus, 12x digital zoom, True Tone flash with Slow Sync, HDR video recording 60fps, slow-mo 1080p 240fps / TrueDepth 12MP f/2.2',
        val    : 'EUR' ,
        price    :850,
        
    },
    {
        id:3,
        title   :'iPhone X',
        titleAll:'This is iPhone X : Built-in memory 512 GB, RAM 64 GB, Display Super Retina (OLED),CPU Apple A14 Bionic, Neural Engine,Camera Triple 12 MP (f/2.4)+12 MP (f/1.6)+12 MP (f/2.2), autofocus, 12x digital zoom, True Tone flash with Slow Sync, HDR video recording 60fps, slow-mo 1080p 240fps / TrueDepth 12MP f/2.2',
        val    : 'EUR' ,
        price    :1250,
        
    },
]
export default telefonArray