/**
 *  @description 商品标签
 */
export interface TagsType {
  color: string; // 标签颜色
  name: string; // 标签名称
}

/**
 * @description 商品列表的数据类型
 */
export interface GoodsList {
  imgUrl: string; // 商品图片地址
  title: string; // 商品标题
  price: string; // 价格
  originalPrice?: number | string; // 商品原价
  rentCoin?: number | string; // 租币
  minLeaseTerm?: number | string; // 最小租赁时间
  convertibleNumber?: number | string; // 已兑换数量
  tags?: TagsType[]; // 标签数组
  isShippingIncluded?: boolean; // 是否包邮
}

/**
 * @description 租币当钱花 数据类型
 */
export interface RentCoinFormMoney {
  title: string; // 标题
  description: string; // 描述
  imgUrl: string; // 图片地址
}

export interface MessageList {
  id: string; // 消息id
  title: string; // 消息标题
  isRead: boolean; // 已读状态
  messageTime: string; // 消息时间
  description: string; // 消息描述
  isDelete: boolean; // 模拟删除数据
  subTitle: string; // 子标题
  subDescription: string; // 子描述
  messageType?: string; // announcement | order     公告消息或订单消息
}

const goodsListData: GoodsList[] = [
  {
    imgUrl: "/src/page/home/img/phone1.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "6.88/天",
    minLeaseTerm: 30,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/home/img/phone2.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "6.88/天",
    minLeaseTerm: 30,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/home/img/computer2.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "6.88/天",
    minLeaseTerm: 30,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/home/img/computer1.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "6.88/天",
    minLeaseTerm: 30,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/home/img/computer1.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "6.88/天",
    minLeaseTerm: 30,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/home/img/computer1.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "6.88/天",
    minLeaseTerm: 30,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
];

const rentCoinFormMoneyData: RentCoinFormMoney[] = [
  {
    title: "租币商城",
    description: "租币当钱花",
    imgUrl: "/src/page/home/img/rent1.png",
  },
  {
    title: "租币任务",
    description: "租币赚不停",
    imgUrl: "/src/page/home/img/rent1.png",
  },
  {
    title: "租币赢现金",
    description: "每天分万元现金",
    imgUrl: "/src/page/home/img/rent1.png",
  },
  {
    title: "租币商城",
    description: "租币当钱花",
    imgUrl: "/src/page/home/img/rent1.png",
  },
];

const shoppingGoodsListData: GoodsList[] = [
  {
    imgUrl: "/src/page/shopping-center/img/goods1.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "9.9",
    minLeaseTerm: 30,
    isShippingIncluded: true,
    convertibleNumber: 2513,
    rentCoin: 200,
    originalPrice: 12.9,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/shopping-center/img/goods2.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "9.9",
    minLeaseTerm: 30,
    isShippingIncluded: true,
    convertibleNumber: 2513,
    rentCoin: 200,
    originalPrice: 12.9,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/shopping-center/img/goods3.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "9.9",
    minLeaseTerm: 30,
    isShippingIncluded: true,
    convertibleNumber: 2513,
    rentCoin: 200,
    originalPrice: 12.9,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/shopping-center/img/goods4.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "9.9",
    minLeaseTerm: 30,
    isShippingIncluded: false,
    convertibleNumber: 2513,
    rentCoin: 200,
    originalPrice: 12.9,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/shopping-center/img/goods3.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "9.9",
    minLeaseTerm: 30,
    isShippingIncluded: false,
    convertibleNumber: 2513,
    rentCoin: 200,
    originalPrice: 12.9,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
  {
    imgUrl: "/src/page/shopping-center/img/goods2.png",
    title: "顶配 iPhone Xs 256GB 大容量",
    price: "9.9",
    minLeaseTerm: 30,
    isShippingIncluded: false,
    convertibleNumber: 2513,
    rentCoin: 200,
    originalPrice: 12.9,
    tags: [{ name: "免押金", color: "#00C8BE" }],
  },
];

const messageAnnouncementListData: MessageList[] = [
  {
    id: "1",
    title: "活动通知",
    description:
      "恭喜获得20个租币，请查收。为了感谢其长久以来的陪伴，这里的文字请忽略。活动期间每天 11 点还会上线限量礼包，数量有限先到先得，用户们千万不要错过！",
    subTitle: "子标题",
    subDescription: "此外，对于所有有贡献的用户。",
    messageTime: "2020-03-23 14:30",
    isRead: false,
    isDelete: false,
    messageType: "announcement",
  },
  {
    id: "2",
    title: "免费得iPhone11",
    description: "恭喜获得20个租币，请查收",
    subTitle: "子标题",
    subDescription: "子描述",
    messageTime: "2020-03-23 14:30",
    isRead: false,
    isDelete: false,
    messageType: "announcement",
  },
  {
    id: "3",
    title: "这里的字符限制是十二个字",
    description: "恭喜获得20个租币，请查收",
    subTitle: "子标题",
    subDescription: "子描述",
    messageTime: "2020-03-23 14:30",
    isRead: false,
    isDelete: false,
    messageType: "announcement",
  },
  {
    id: "4",
    title: "节日赠租币",
    description:
      "人人租机祝你节日快乐，送88个租币位置限AAAAA AA币位置限AAAAA AA",
    subTitle: "子标题",
    subDescription: "子描述",
    messageTime: "2020-03-23 14:30",
    isRead: false,
    isDelete: false,
    messageType: "announcement",
  },
];

const messageOrderListData: MessageList[] = [
  {
    id: "1",
    title: "订单已取消",
    description: "订单已成功取消，感谢您的关注",
    subTitle: "子标题",
    subDescription: "子描述",
    messageTime: "2020-03-23 14:30",
    isRead: false,
    isDelete: false,
    messageType: "order",
  },
];

export {
  goodsListData,
  rentCoinFormMoneyData,
  shoppingGoodsListData,
  messageAnnouncementListData,
  messageOrderListData,
};
