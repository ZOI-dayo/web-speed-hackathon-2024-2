// import { compareWithFlags, PRIMARY as UCA_L1_FLAG, SECONDARY as UCA_L2_FLAG } from 'unicode-collation-algorithm2';

// UCA_L1_FLAG はベース文字、UCA_L2_FLAG は濁点・半濁点・アクセントを区別する (sensitivity: accent に相当)
// const SENSITIVITY_ACCENT_FLAG = UCA_L1_FLAG ^ UCA_L2_FLAG;

type Params = {
  query: string;
  target: string;
};

// ひらがな・カタカナ・半角・全角を区別せずに文字列が含まれているかを調べる
export function isContains({ query, target }: Params): boolean {
  /*
  // target の先頭から順に query が含まれているかを調べる
  TARGET_LOOP: for (let offset = 0; offset <= target.length - query.length; offset++) {
    for (let idx = 0; idx < query.length; idx++) {
      // 1文字ずつ Unicode Collation Algorithm で比較する
      // unicode-collation-algorithm2 は Default Unicode Collation Element Table (DUCET) を collation として使う
      if (compareWithFlags(target[offset + idx]!, query[idx]!, SENSITIVITY_ACCENT_FLAG) !== 0) {
        continue TARGET_LOOP;
      }
    }
    // query のすべての文字が含まれていたら true を返す
    return true;
  }
  // target の最後まで query が含まれていなかったら false を返す
  return false;
   */
  const chars = [
    ["あ", "ア", "ｱ"],
    ["い", "イ", "ｲ"],
    ["う", "ウ", "ｳ"],
    ["え", "エ", "ｴ"],
    ["お", "オ", "ｵ"],
    ["か", "カ", "ｶ"],
    ["き", "キ", "ｷ"],
    ["く", "ク", "ｸ"],
    ["け", "ケ", "ｹ"],
    ["こ", "コ", "ｺ"],
    ["さ", "サ", "ｻ"],
    ["し", "シ", "ｼ"],
    ["す", "ス", "ｽ"],
    ["せ", "セ", "ｾ"],
    ["そ", "ソ", "ｿ"],
    ["た", "タ", "ﾀ"],
    ["ち", "チ", "ﾁ"],
    ["つ", "ツ", "ﾂ"],
    ["て", "テ", "ﾃ"],
    ["と", "ト", "ﾄ"],
    ["な", "ナ", "ﾅ"],
    ["に", "ニ", "ﾆ"],
    ["ぬ", "ヌ", "ﾇ"],
    ["ね", "ネ", "ﾈ"],
    ["の", "ノ", "ﾉ"],
    ["は", "ハ", "ﾊ"],
    ["ひ", "ヒ", "ﾋ"],
    ["ふ", "フ", "ﾌ"],
    ["へ", "ヘ", "ﾍ"],
    ["ほ", "ホ", "ﾎ"],
    ["ま", "マ", "ﾏ"],
    ["み", "ミ", "ﾐ"],
    ["む", "ム", "ﾑ"],
    ["め", "メ", "ﾒ"],
    ["も", "モ", "ﾓ"],
    ["や", "ヤ", "ﾔ"],
    ["ゆ", "ユ", "ﾕ"],
    ["よ", "ヨ", "ﾖ"],
    ["ら", "ラ", "ﾗ"],
    ["り", "リ", "ﾘ"],
    ["る", "ル", "ﾙ"],
    ["れ", "レ", "ﾚ"],
    ["ろ", "ロ", "ﾛ"],
    ["わ", "ワ", "ﾜ"],
    ["を", "ヲ", "ｦ"],
    ["ん", "ン", "ﾝ"],
  ]
  for (const char of chars) {
    query.replace(char[1] as string, char[0] as string);
    query.replace(char[2] as string, char[0] as string);
    target.replace(char[1] as string, char[0] as string);
    target.replace(char[2] as string, char[0] as string);
  }
  return target.includes(query);
}
