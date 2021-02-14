import {
    HomeOutlined,/*首页*/
    AppstoreOutlined,/*商品*/
    BarsOutlined,/*品类管理*/
    ToolOutlined,/*商品管理*/
    UserOutlined,/*用户管理*/
    SafetyCertificateOutlined,/*角色管理*/
    AreaChartOutlined,/*图形图表*/
    BarChartOutlined,/*柱形图*/
    LineChartOutlined,/*折线图*/
    PieChartOutlined,/*饼图*/
    SnippetsOutlined,
} from '@ant-design/icons';


const menuList = [
    {
        title: 'Home', // 菜单标题名称
        key: '/home', // 对应的path
        icon: <HomeOutlined/>, // 图标名称
        isPublic: true, // 公开的
    },
    {
        title: 'Products',
        key: '/products',
        icon: <AppstoreOutlined/>,
        children: [ // 子菜单列表
            {
                title: 'Category',
                key: '/category',
                icon: <BarsOutlined/>,
            },
            {
                title: 'Department',
                key: '/product',
                icon: <ToolOutlined/>,
            },
        ]
    },

    {
        title: 'User',
        key: '/user',
        icon: <UserOutlined/>,
    },
    {
        title: 'Role',
        key: '/role',
        icon: <SafetyCertificateOutlined/>,
    },

    {
        title: 'Charts',
        key: '/charts',
        icon: <AreaChartOutlined/>,
        children: [
            {
                title: 'Bar',
                key: '/charts/bar',
                icon: <BarChartOutlined/>
            },
            {
                title: 'Line',
                key: '/charts/line',
                icon: <LineChartOutlined/>
            },
            {
                title: 'Pie',
                key: '/charts/pie',
                icon: <PieChartOutlined/>
            },
        ]
    },

    {
        title: 'Orders',
        key: '/order',
        icon: <SnippetsOutlined/>
    },
]

export default menuList