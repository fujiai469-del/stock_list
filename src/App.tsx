import React, { useState } from "react";
import {
  Trophy,
  Cpu,
  Zap,
  PenTool,
  Globe,
  MapPin,
  Building2,
  TrendingUp,
  Search,
  Star,
  CheckCircle,
  Plane,
  HeartPulse,
  Anchor,
  ShoppingBag,
  Truck,
} from "lucide-react";

// 追加のアイコンコンポーネント
const CarIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? 24}
    height={size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const COMPANIES = [
  {
    id: 1,
    name: "レーザーテック",
    category: "半導体・電子",
    location: "神奈川",
    scale: "大企業",
    product: "マスク欠陥検査装置",
    highlight:
      "【シェア100%】半導体の微細化に不可欠な検査装置の絶対王者。超高収益・高年収。",
    color: "from-blue-500 to-cyan-400",
    icon: Cpu,
  },
  {
    id: 2,
    name: "東京応化工業",
    category: "半導体・電子",
    location: "神奈川",
    scale: "大企業",
    product: "フォトレジスト",
    highlight:
      "【世界首位級】半導体製造に必須の感光性樹脂で圧倒的。化学メーカーの勝ち組。",
    color: "from-blue-500 to-cyan-400",
    icon: Zap,
  },
  {
    id: 3,
    name: "ディスコ",
    category: "半導体・電子",
    location: "東京",
    scale: "大企業",
    product: "切断・研削・研磨装置",
    highlight:
      "【世界シェア約70%】「切る・削る・磨く」技術で独走。利益率が極めて高い。",
    color: "from-blue-500 to-cyan-400",
    icon: Cpu,
  },
  {
    id: 4,
    name: "ナブテスコ",
    category: "機械・ロボット",
    location: "東京",
    scale: "大企業",
    product: "精密減速機",
    highlight:
      "【世界シェア約60%】産業用ロボットの関節部品。自動化社会の心臓部を握る。",
    color: "from-orange-500 to-amber-400",
    icon: Building2,
  },
  {
    id: 5,
    name: "THK",
    category: "機械・ロボット",
    location: "東京",
    scale: "大企業",
    product: "LMガイド",
    highlight:
      "【世界シェア50%超】「機械をなめらかに動かす」部品のパイオニア。",
    color: "from-orange-500 to-amber-400",
    icon: PenTool,
  },
  {
    id: 6,
    name: "ファナック",
    category: "機械・ロボット",
    location: "山梨",
    scale: "超大企業",
    product: "CNC装置・ロボット",
    highlight:
      "【世界トップ】工場の自動化になくてはならない存在。森の中に本社がある超優良企業。",
    color: "from-yellow-500 to-amber-400",
    icon: Building2,
  },
  {
    id: 7,
    name: "レオン自動機",
    category: "食品・生活",
    location: "栃木",
    scale: "中堅企業",
    product: "包あん機",
    highlight:
      "【世界シェア高】世界の民族料理を自動で作る機械。120カ国以上へ輸出。",
    color: "from-emerald-500 to-green-400",
    icon: Globe,
  },
  {
    id: 8,
    name: "マニー",
    category: "医療・ヘルスケア",
    location: "栃木",
    scale: "大企業",
    product: "手術用縫合針",
    highlight:
      "【世界一の切れ味】眼科用メスや縫合針で世界トップ。超高収益体質。",
    color: "from-rose-400 to-red-300",
    icon: HeartPulse,
  },
  {
    id: 9,
    name: "朝日インテック",
    category: "医療・ヘルスケア",
    location: "愛知",
    scale: "大企業",
    product: "PTCAガイドワイヤー",
    highlight:
      "【世界トップ級】カテーテル治療に必須のワイヤー技術でグローバルに活躍。",
    color: "from-rose-400 to-red-300",
    icon: HeartPulse,
  },
  {
    id: 10,
    name: "ジャムコ",
    category: "航空・宇宙",
    location: "東京",
    scale: "大企業",
    product: "航空機用ギャレー",
    highlight:
      "【世界独占的】ボーイング等の厨房・トイレ設備で圧倒的シェア。",
    color: "from-indigo-500 to-purple-400",
    icon: Plane,
  },
  {
    id: 11,
    name: "日機装",
    category: "航空・宇宙",
    location: "東京",
    scale: "大企業",
    product: "逆噴射装置部品",
    highlight:
      "【世界シェア90%超】炭素繊維強化プラスチック製カスケードで独占。",
    color: "from-indigo-500 to-purple-400",
    icon: Plane,
  },
  {
    id: 12,
    name: "フコク",
    category: "自動車・素材",
    location: "埼玉",
    scale: "中堅企業",
    product: "ワイパーブレードラバー",
    highlight:
      "【世界No.1】新車装着用ワイパーゴムで圧倒的。地味だが世界最強。",
    color: "from-slate-600 to-slate-400",
    icon: CarIcon,
  },
  {
    id: 13,
    name: "小糸製作所",
    category: "自動車・素材",
    location: "東京",
    scale: "大企業",
    product: "自動車用ヘッドランプ",
    highlight:
      "【世界トップシェア】車の「目」を作るリーディングカンパニー。",
    color: "from-slate-600 to-slate-400",
    icon: CarIcon,
  },
  {
    id: 14,
    name: "ニッポン高度紙工業",
    category: "半導体・電子",
    location: "高知",
    scale: "大企業",
    product: "コンデンサ用セパレータ",
    highlight:
      "【世界シェア60%】スマホやEVに必須の素材。高知発のグローバル企業。",
    color: "from-blue-500 to-cyan-400",
    icon: MapPin,
  },
  {
    id: 15,
    name: "ユニオンツール",
    category: "半導体・電子",
    location: "東京",
    scale: "大企業",
    product: "PCBドリル",
    highlight:
      "【世界トップ】電子基板に穴を開けるドリルで首位。利益率が高い。",
    color: "from-blue-500 to-cyan-400",
    icon: PenTool,
  },
  {
    id: 16,
    name: "日東紡績",
    category: "自動車・素材",
    location: "東京",
    scale: "大企業",
    product: "スペシャルガラス",
    highlight:
      "【世界トップ】5G通信に不可欠な高性能ガラス繊維で世界をリード。",
    color: "from-slate-500 to-gray-400",
    icon: Star,
  },
  {
    id: 17,
    name: "シマノ",
    category: "食品・生活",
    location: "大阪",
    scale: "超大企業",
    product: "自転車部品",
    highlight:
      "【世界シェア85%】高級自転車パーツの事実上の世界標準。釣具も強い。",
    color: "from-emerald-500 to-green-400",
    icon: ShoppingBag,
  },
  {
    id: 18,
    name: "マブチモーター",
    category: "自動車・素材",
    location: "千葉",
    scale: "大企業",
    product: "小型モーター",
    highlight:
      "【世界シェア50%】自動車のミラーやドアロック用モーターで圧倒的。",
    color: "from-slate-600 to-slate-400",
    icon: Zap,
  },
  {
    id: 19,
    name: "YKK",
    category: "食品・生活",
    location: "東京",
    scale: "大企業",
    product: "ファスナー",
    highlight:
      "【世界シェア40%】誰もが知る「チャック」の会社。実は建材も強い。",
    color: "from-emerald-500 to-green-400",
    icon: Star,
  },
  {
    id: 20,
    name: "オプテックスグループ",
    category: "機械・ロボット",
    location: "滋賀",
    scale: "中堅企業",
    product: "自動ドアセンサー",
    highlight:
      "【世界トップ級】自動ドアや防犯用センサーのニッチトップ。",
    color: "from-orange-500 to-amber-400",
    icon: CheckCircle,
  },
];

function HiddenGemsList() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "半導体・電子",
    "機械・ロボット",
    "自動車・素材",
    "医療・ヘルスケア",
    "航空・宇宙",
    "食品・生活",
  ];

  const filteredCompanies =
    filter === "All"
      ? COMPANIES
      : COMPANIES.filter((c) => c.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto">
        {/* ヘッダー */}
        <header className="mb-10 text-center pt-6">
          <div className="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3 shadow-md animate-fade-in-up">
            27卒就活生・保存版
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-3 tracking-tight leading-tight">
            世界No.1シェアを持つ
            <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 ml-2 md:ml-0">
              隠れ優良企業
            </span>
            リスト
          </h1>
          <p className="text-slate-500 font-medium mt-2 md:text-lg">
            BtoBだから知名度は低いけど、実は世界ですごい会社まとめ
          </p>
        </header>

        {/* フィルタタブ */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sticky top-2 z-10 bg-slate-50/90 p-2 rounded-xl backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                filter === cat
                  ? "bg-slate-800 text-white shadow-lg transform scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* リスト表示 */}
        <div className="grid gap-5 pb-12">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden"
            >
              {/* 背景装飾（うっすら） */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${company.color} opacity-5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-opacity group-hover:opacity-10`}
              />

              <div className="flex items-start gap-4 relative z-0">
                {/* 左側のアイコン */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <company.icon size={28} />
                </div>

                {/* 右側の情報 */}
                <div className="flex-1 min-w-0">
                  {/* min-w-0 でテキストはみ出し防止 */}
                  <div className="flex flex-wrap justify-between items-center mb-1 gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                        {company.category}
                      </span>
                      <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200 flex items-center gap-1">
                        <MapPin size={10} className="text-slate-400" />
                        {company.location}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full flex items-center gap-1 border border-indigo-100">
                      <Trophy size={12} /> 世界シェアトップ
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors truncate">
                    {company.name}
                  </h2>

                  <p className="text-sm text-slate-500 font-medium mb-3 border-b border-slate-100 pb-2">
                    {company.product}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 group-hover:bg-indigo-50/30 transition-colors">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-bold text-indigo-500 block mb-1 text-xs uppercase tracking-wider">
                        Why it's amazing
                      </span>
                      {company.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-8 text-center pb-8">
          <p className="text-xs text-slate-400">
            ※経済産業省「グローバルニッチトップ企業100選」選定企業および業界シェアデータを基に作成
          </p>
          <p className="text-xs text-slate-300 mt-2">Built for 2027 Grads</p>
        </div>
      </div>
    </div>
  );
}

// ここが「アプリの入り口」
export default function App() {
  return <HiddenGemsList />;
}
