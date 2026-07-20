import { buildLP } from '../series-lib/build-lp.mjs';
import { fileURLToPath } from 'node:url';

const SRC = fileURLToPath(new URL('./source.json', import.meta.url)); // 材料JSON（このフォルダに永久保存）

buildLP({
  srcPath: SRC,
  outDir: 'C:/Users/kirak/Downloads/アマテラ/hair-education-lp',
  theme: 'indigo',
  brand: '薄毛と生活習慣の学習ノート',
  titleTag: '薄毛と生活習慣の学習ノート｜科学的根拠に基づく髪の健康（根拠付き）',
  metaDesc: '薄毛のタイプ・原因・医学的治療の位置づけから、自分でできる生活習慣（栄養・睡眠・頭皮ケア・ストレス・禁煙）まで、一般の方にもわかりやすく、医療関係者も確認できる根拠とともにまとめた学習資料。生活習慣で改善しうる範囲と医療が必要な範囲を区別。特定商品を宣伝しない中立版。',
  ogTitle: '薄毛と生活習慣の学習ノート｜科学的根拠に基づく髪の健康',
  ogDesc: '薄毛の全体像と、生活習慣でできることを、一般向け＋医療者向けの二層で根拠付き・中立にまとめた学習資料。',
  heroH1: '薄毛と生活習慣<br>― 科学的根拠でわかる、髪の健康 ―',
  heroLead: '薄毛にはさまざまなタイプがあり、<strong>生活習慣で改善が期待できるもの</strong>（栄養不足や急な減量による抜け毛など）と、<strong>生活習慣だけでは止められず医療が必要なもの</strong>（AGA・円形脱毛症など）があります。本資料は薄毛の全体像と、自分でできる生活習慣の対策を、<strong>一般の方にもわかりやすく</strong>、かつ<strong>医療関係者も確認できる根拠（機序・出典・数値の区分）</strong>とともに整理した学習ノートです。<strong>特定の育毛剤・シャンプー・サプリを宣伝するものではなく</strong>、効果のエビデンスの強弱を正直に示します。',
  stats: [
    { b: '毛周期', span: '髪は成長期→退行期→休止期を繰り返す' },
    { b: '50〜100本', span: '1日の自然な抜け毛の目安（それ以上は要注意）' },
    { b: 'タイプ別', span: 'AGA・女性型・円形脱毛症で対処が全く違う' },
    { b: '13項目', span: '本資料で個別に解説するトピック' },
  ],
  groups: [
    { id: 'basics', label: '基礎編：薄毛を正しく知る', desc: '毛周期の基礎、タイプの見分け、原因、そして受診の目安。まずここから。', keys: ['hair-what', 'hair-types', 'hair-cause', 'hair-check'] },
    { id: 'types', label: 'タイプ別・医学的な位置づけ', desc: 'AGA・女性の薄毛・円形脱毛症・栄養。生活習慣で対処できる範囲と医療の範囲を区別。', keys: ['hair-aga', 'hair-female', 'hair-alopecia', 'hair-nutrition'] },
    { id: 'lifestyle', label: '実践編：生活習慣でできること', desc: '食事・睡眠・頭皮ケア・ストレス/禁煙。土台を整えるための現実的な対策。', keys: ['hair-diet', 'hair-sleep', 'hair-scalp', 'hair-lifestyle'] },
    { id: 'myth', label: '誤解の整理', desc: '広告や俗説を、確立/限定的/未確立に分けて中立に。', keys: ['hair-myth'] },
  ],
  footerNote: '薄毛と生活習慣の学習ノート（作成: 2026年7月）｜出典: 日本皮膚科学会 診療ガイドライン・NCBI/StatPearls・MSDマニュアル・厚生労働省 他',
  disclaimerHtml: `<p>本資料は薄毛・毛髪に関する<b>一般的な医学・栄養の知識を教育目的で整理したもの</b>であり、特定の疾患の診断・治療や、特定商品（育毛剤・シャンプー・サプリメント・医薬品等）の効果を保証・推奨するものではありません。</p><p>薄毛には<b>タイプによって対処が全く異なるもの</b>（AGA・円形脱毛症など医療が必要なもの、栄養や生活習慣が関わるもの）があり、<b>自己判断は適切な対処の遅れにつながることがあります</b>。急な抜け毛・円形の脱毛・地肌が目立つ・かゆみや炎症などがある場合は、皮膚科など専門医にご相談ください。</p><p>AGAの薬物療法（ミノキシジル・フィナステリド等）はいずれも<b>医師の診断・処方を要する医療</b>で、適応・禁忌・副作用の評価が必要です（特に妊娠可能な女性には禁忌の薬があります）。本資料は特定製品の効能を示すものではありません。数値・基準は改定されることがあるため、正確な情報は各出典の原典をご確認ください。</p>`,
  transform(byKey, fix) {
    // === HIGH(structural): hair-scalp の professional_html が空だったので執筆 ===
    byKey['hair-scalp'].professional_html = `<p><strong>洗髪・頭皮ケアの位置づけ：</strong>洗髪は皮脂・汗・汚れ・整髪料を除去して頭皮環境と衛生を保つケアであり、AGAの主因であるDHT主導の毛包ミニチュア化そのものを是正するものではない。適切な洗髪は頭皮の炎症・かゆみ・脂漏の管理に資するが、洗髪頻度やシャンプーの種類が発毛を左右するという確立したエビデンスは乏しい（未確立）（出典: MSDマニュアル『脱毛症』／StatPearls, Androgenetic Alopecia）。「洗いすぎで薄毛になる」「洗わない方がよい」といった主張に確たる根拠はなく、過度な摩擦・刺激を避けつつ清潔を保つのが現実的である。</p><p><strong>牽引性脱毛（traction alopecia）：</strong>きつい結髪・ポニーテール・編み込み・エクステンション等による持続的・反復的な毛への牽引が原因で、二相性の経過をとる。初期は非瘢痕性で牽引を止めれば可逆だが、慢性化・反復すると毛包周囲の線維化を経て毛包が破壊され、不可逆の瘢痕性脱毛へ移行しうる。前頭側頭部の生え際に好発し、早期の習慣是正が重要である（出典: StatPearls, Traction Alopecia）。</p><p><strong>毛幹のダメージと毛包性脱毛の区別：</strong>パーマ・カラー・過度なブラッシングや熱、紫外線は毛幹（すでに生えた髪）のケラチンやジスルフィド結合を傷め、切れ毛・パサつきを生じるが、これは毛包からの脱毛（抜け毛）とは機序が異なる。毛幹ダメージは毛量減少ではなく毛の性状の問題であり、頭皮・毛包レベルの脱毛と混同しない。頭皮の紫外線対策は頭皮の健康維持の観点で妥当だが、発毛効果を意味するものではない（出典: StatPearls／MSDマニュアル『脱毛症』）。</p><p><strong>臨床的留意：</strong>抜け毛評価のプルテスト（pull test）は一定本数の毛を把持して軽く牽引し、複数本が容易に抜ければ活動性の脱毛を示唆する（陽性の目安本数は文献による）。育毛シャンプー・頭皮用美容液等の発毛効果は質の高いエビデンスに乏しく（未確立）、AGA等に確立した治療（フィナステリド・ミノキシジル等の一般名。いずれも医師の診断・処方を要する医療）を置き換えるものではない。牽引性脱毛の進行や瘢痕化が疑われる場合は早期の皮膚科受診が推奨される。本項は特定商品の効能を保証しない。</p>`;

    // === 数値区分の統一: StatPearls/MSD/PMC等の二次文献由来値は「公式値」→「提供資料内値」へ ===
    // （公式値は日本皮膚科学会 診療ガイドラインの推奨度・厚労省 食事摂取基準など公的標準に限定）
    for (const key of Object.keys(byKey)) {
      const s = byKey[key];
      if (!s.key_numbers) continue;
      s.key_numbers = s.key_numbers.map(k => {
        if (/公式値/.test(k.basis)
          && /(StatPearls|NBK|MSD|Manual|PMC)/i.test(k.basis)
          && !/(ガイドライン|皮膚科学会|食事摂取基準|e-ヘルスネット|厚生労働省|厚労省)/.test(k.basis)) {
          return { ...k, basis: k.basis.replace('公式値', '提供資料内値') };
        }
        return k;
      });
    }

    // === MEDIUM: hair-cause の「5:0」は生理的にあり得ず hair-what(5:1)と不一致 → 5:1 に是正 ===
    fix('hair-cause', 'professional_html', '男性型脱毛症の病理では約5:0まで低下すると報告される', '男性型脱毛症では成長期毛の短縮・軟毛化により約5:1程度まで大きく低下すると報告される');
    byKey['hair-cause'].key_numbers = byKey['hair-cause'].key_numbers.map(k =>
      (k.value && k.value.includes('5:0')) ? { ...k, value: k.value.replace('5:0', '5:1') } : k);

    // === MEDIUM: hair-myth ワカメ俗説の低品質(商用)出典を除去し、未確立の事実記述へ ===
    fix('hair-myth', 'professional_html', '俗説(未確定・出典: 医師監修記事 ヘアケアラボ)', '俗説（海藻・特定食品が発毛を促す直接的な医学的エビデンスは確認されていない＝未確立）');

    // === LOW: hair-nutrition 単一研究の割合は「実測値」→「提供資料内値」 ===
    byKey['hair-nutrition'].key_numbers = byKey['hair-nutrition'].key_numbers.map(k =>
      /実測値/.test(k.basis) ? { ...k, basis: k.basis.replace('実測値', '提供資料内値') } : k);

    // === LOW: hair-sleep 一般向けの「深い眠り＝ノンレム睡眠」は不正確 → 徐波睡眠であることを明示 ===
    fix('hair-sleep', 'layperson_html', '深い眠り＝ノンレム睡眠', '深い眠り＝ノンレム睡眠の中の「徐波睡眠」');
  },
});
