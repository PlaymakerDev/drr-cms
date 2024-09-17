const menu = [
  {
    icon: "AppstoreOutlined",
    path: "/admin/dashboard",
    path_list: [],
    label: "หน้าหลัก",
    label_key: "dashboard",
    default_color_icon: ''
  },
  {
    icon: "PieChartOutlined",
    path: "/admin/complaint-statistic",
    path_list: [],
    label: "สถิติเรื่องร้องเรียน",
    label_key: "complaint_statistic",
    default_color_icon: ''
  },
  {
    icon: "TableOutlined",
    path: "/admin/complaint-listing/overview",
    path_list: [],
    label: "รายการร้องเรียน",
    label_key: "complain_listing",
    default_color_icon: ''
  },
  {
    icon: "ProfileOutlined",
    path: "/admin/report",
    path_list: [],
    label: "รายงาน",
    label_key: "report",
    default_color_icon: ''
  },
  {
    icon: "SettingOutlined",
    path: "/admin/setting",
    path_list: [
      {
        label: 'จัดการผู้ใช้งาน',
        path: '/admin/setting/manage-user/overview'
      },
      {
        label: 'จัดการแหล่งที่มาข้อมูล',
        path: '/admin/setting/manage-information'
      },
    ],
      label: "ตั้งค่า",
      label_key: "setting",
      default_color_icon: ''
    },
]

export default menu