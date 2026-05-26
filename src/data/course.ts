export type Lesson = {
  id: string;
  slug: string;
  title: string;
  title_en?: string;
  kc: string[];
  estimated_minutes: number;
  kind: 'example' | 'exercise' | 'homework' | 'challenge';
  chapter: string;
};

export const chapters = [
  {
    slug: '01-variables-types',
    title: 'Variables & Types',
    title_zh: '变量与类型',
    summary:
      'Name a value once, reuse it many times. Learn the three core types of CSC 141 ' +
      '— int, float, str — and how Python keeps them straight.',
    estimated_minutes: 75,
    lessons: [
      {
        id: 'csc141-01-first-variable',
        slug: '01-first-variable',
        title: 'Your First Variable',
        title_zh: '第一个变量',
        kc: ['python-variables'],
        kind: 'exercise',
        estimated_minutes: 10,
      },
      {
        id: 'csc141-02-types-int-float',
        slug: '02-types-int-float',
        title: 'Integers & Floats',
        title_zh: '整数与浮点数',
        kc: ['python-types'],
        kind: 'exercise',
        estimated_minutes: 15,
      },
      {
        id: 'csc141-03-strings-and-fstring',
        slug: '03-strings-and-fstring',
        title: 'Strings & f-strings',
        title_zh: '字符串与 f-string',
        kc: ['python-strings'],
        kind: 'exercise',
        estimated_minutes: 20,
      },
    ] satisfies Omit<Lesson, 'chapter'>[],
  },
  {
    slug: '02-conditionals',
    title: 'Conditionals',
    title_zh: '条件分支',
    summary:
      'Make decisions: if / elif / else, comparison and logical operators, ' +
      'and the order-of-branches trap. Strictly aligned with Think Python §5.1–§5.6.',
    estimated_minutes: 90,
    lessons: [
      {
        id: 'csc141-ch2-00-example-sign-of-number',
        slug: '00-example-sign-of-number',
        title: 'Walkthrough: Sign of a Number',
        title_zh: '例题: 数的正负号',
        kc: ['python-conditionals'],
        kind: 'example',
        estimated_minutes: 8,
      },
      {
        id: 'csc141-04-letter-grade',
        slug: '01-letter-grade',
        title: 'Letter Grade',
        title_zh: '等级字母',
        kc: ['python-conditionals'],
        kind: 'exercise',
        estimated_minutes: 15,
      },
      {
        id: 'csc141-ch2-02-bmi-category',
        slug: '02-bmi-category',
        title: 'BMI Category',
        title_zh: '体重指数分类',
        kc: ['python-conditionals'],
        kind: 'exercise',
        estimated_minutes: 15,
      },
      {
        id: 'csc141-ch2-03-leap-year',
        slug: '03-leap-year',
        title: 'Leap Year',
        title_zh: '闰年判断',
        kc: ['python-conditionals'],
        kind: 'exercise',
        estimated_minutes: 15,
      },
      {
        id: 'csc141-ch2-04-tax-bracket',
        slug: '04-tax-bracket',
        title: 'Homework: Tax Bracket Calculator',
        title_zh: '作业: 阶梯税率计算器',
        kc: ['python-conditionals'],
        kind: 'homework',
        estimated_minutes: 35,
      },
    ] satisfies Omit<Lesson, 'chapter'>[],
  },
  {
    slug: '03-loops',
    title: 'Loops',
    title_zh: '循环',
    summary:
      'Do something many times. for / range, while, break — and the four patterns ' +
      '(accumulator, counter, tracking variable, while-true) that cover 95% of beginner loops. ' +
      'Strictly aligned with Think Python §7.1–§7.4.',
    estimated_minutes: 100,
    lessons: [
      {
        id: 'csc141-ch3-00-example-countdown',
        slug: '00-example-countdown',
        title: 'Walkthrough: Countdown',
        title_zh: '例题: 倒计时',
        kc: ['python-loops'],
        kind: 'example',
        estimated_minutes: 8,
      },
      {
        id: 'csc141-05-sum-to-n',
        slug: '01-sum-to-n',
        title: 'Sum 1..n',
        title_zh: '1 到 n 求和',
        kc: ['python-loops'],
        kind: 'exercise',
        estimated_minutes: 15,
      },
      {
        id: 'csc141-ch3-02-fizzbuzz',
        slug: '02-fizzbuzz',
        title: 'FizzBuzz',
        title_zh: 'FizzBuzz',
        kc: ['python-loops', 'python-conditionals'],
        kind: 'exercise',
        estimated_minutes: 20,
      },
      {
        id: 'csc141-ch3-03-find-max',
        slug: '03-find-max',
        title: 'Find the Max',
        title_zh: '找最大值',
        kc: ['python-loops'],
        kind: 'exercise',
        estimated_minutes: 15,
      },
      {
        id: 'csc141-ch3-04-collatz',
        slug: '04-collatz',
        title: 'Homework: Collatz Steps',
        title_zh: '作业: Collatz 步数',
        kc: ['python-loops', 'python-conditionals'],
        kind: 'homework',
        estimated_minutes: 30,
      },
    ] satisfies Omit<Lesson, 'chapter'>[],
  },
  {
    slug: '04-functions',
    title: 'Functions',
    title_zh: '函数',
    summary:
      'Name a group of statements, eliminate repetition, debug the parts one at a time. ' +
      'def / return / parameters / default args / composition. Strictly aligned with ' +
      'Think Python §3.4–§3.11 and Chapter 6.',
    estimated_minutes: 105,
    lessons: [
      {
        id: 'csc141-ch4-00-example-square-cube',
        slug: '00-example-square-cube',
        title: 'Walkthrough: Square & Cube',
        title_zh: '例题: 平方和立方',
        kc: ['python-functions'],
        kind: 'example',
        estimated_minutes: 8,
      },
      {
        id: 'csc141-10-clamp',
        slug: '01-clamp',
        title: 'Clamp',
        title_zh: '限制范围',
        kc: ['python-functions', 'python-conditionals'],
        kind: 'exercise',
        estimated_minutes: 15,
      },
      {
        id: 'csc141-11-multi-args',
        slug: '02-multi-args',
        title: 'Multi-args Averaging',
        title_zh: '三参数求平均',
        kc: ['python-functions'],
        kind: 'exercise',
        estimated_minutes: 20,
      },
      {
        id: 'csc141-12-default-args',
        slug: '03-default-args',
        title: 'Default Args Greeting',
        title_zh: '默认参数与关键字参数',
        kc: ['python-functions'],
        kind: 'exercise',
        estimated_minutes: 20,
      },
      {
        id: 'csc141-ch4-04-tip-calculator',
        slug: '04-tip-calculator',
        title: 'Homework: Tip Calculator',
        title_zh: '作业: 小费计算器',
        kc: ['python-functions'],
        kind: 'homework',
        estimated_minutes: 40,
      },
    ] satisfies Omit<Lesson, 'chapter'>[],
  },
  {
    slug: '05-lists',
    title: 'Lists',
    title_zh: '列表',
    summary:
      'The universal container for sequences of values. Create, index, slice, mutate ' +
      '— and the copy-first idiom that saves you from aliasing bugs. List comprehensions ' +
      'compress map+filter into one line. Strictly aligned with Think Python §10.1–§10.12.',
    estimated_minutes: 110,
    lessons: [
      { id: 'csc141-ch5-00-example-list-basics', slug: '00-example-list-basics', title: 'Walkthrough: List Basics', title_zh: '例题: 列表入门', kc: ['python-lists'], kind: 'example',  estimated_minutes:  8 },
      { id: 'csc141-13-list-basics',             slug: '01-list-basics',         title: 'List Basics',              title_zh: '列表入门',     kc: ['python-lists', 'python-loops'], kind: 'exercise', estimated_minutes: 15 },
      { id: 'csc141-14-list-comprehension',      slug: '02-list-comprehension',  title: 'List Comprehension',       title_zh: '列表推导式',   kc: ['python-lists', 'python-loops'], kind: 'exercise', estimated_minutes: 20 },
      { id: 'csc141-ch5-03-list-methods',        slug: '03-list-methods',        title: 'List Methods',             title_zh: '列表方法',     kc: ['python-lists'], kind: 'exercise', estimated_minutes: 20 },
      { id: 'csc141-ch5-04-grade-report',        slug: '04-grade-report',        title: 'Homework: Student Grade Report', title_zh: '作业: 学生成绩报告', kc: ['python-lists', 'python-functions', 'python-loops'], kind: 'homework', estimated_minutes: 45 },
    ] satisfies Omit<Lesson, 'chapter'>[],
  },
  {
    slug: '06-string-algos',
    title: 'String Algorithms',
    title_zh: '字符串算法',
    summary:
      'Treat strings as collections of characters. Index, slice, traverse, search, count. ' +
      '.split() / .join() / .strip() / [::-1] — the methods you reach for daily. ' +
      'Strictly aligned with Think Python §8.1–§8.10.',
    estimated_minutes: 110,
    lessons: [
      { id: 'csc141-ch6-00-example-count-vowels', slug: '00-example-count-vowels', title: 'Walkthrough: Count Vowels', title_zh: '例题: 数元音字母', kc: ['python-strings', 'python-loops'], kind: 'example', estimated_minutes: 8 },
      { id: 'csc141-15-word-count',               slug: '01-word-count',           title: 'Word Count',                title_zh: '单词计数',         kc: ['python-strings'], kind: 'exercise', estimated_minutes: 15 },
      { id: 'csc141-16-palindrome',               slug: '02-palindrome',           title: 'Palindrome Check',          title_zh: '回文判断',         kc: ['python-strings'], kind: 'exercise', estimated_minutes: 20 },
      { id: 'csc141-ch6-03-find-first',           slug: '03-find-first',           title: 'Find First Match',          title_zh: '找首个匹配',       kc: ['python-strings', 'python-loops'], kind: 'exercise', estimated_minutes: 20 },
      { id: 'csc141-ch6-04-text-stats',           slug: '04-text-stats',           title: 'Homework: Text Statistics', title_zh: '作业: 文本统计',   kc: ['python-strings', 'python-functions', 'python-lists'], kind: 'homework', estimated_minutes: 45 },
    ] satisfies Omit<Lesson, 'chapter'>[],
  },
  {
    slug: '07-file-io',
    title: 'File I/O',
    title_zh: '文件输入输出',
    summary:
      'Persistence. open() / with / read / write / append. The shape of every batch data ' +
      'job: read, process, write. Strictly aligned with Automate the Boring Stuff with Python ' +
      'chapter 9.',
    estimated_minutes: 110,
    lessons: [
      { id: 'csc141-ch7-00-example-write-then-read', slug: '00-example-write-then-read', title: 'Walkthrough: Write Then Read', title_zh: '例题: 写入再读取', kc: ['python-file-io'], kind: 'example',  estimated_minutes:  8 },
      { id: 'csc141-17-read-csv',                    slug: '01-read-csv',                title: 'Read CSV-Lite',                title_zh: '读 CSV 文件',     kc: ['python-file-io', 'python-strings', 'python-lists'], kind: 'exercise', estimated_minutes: 20 },
      { id: 'csc141-18-write-log',                   slug: '02-write-log',               title: 'Append a Log',                 title_zh: '追加日志',         kc: ['python-file-io'], kind: 'exercise', estimated_minutes: 20 },
      { id: 'csc141-ch7-03-line-count',              slug: '03-line-count',              title: 'Count Lines',                  title_zh: '数行',             kc: ['python-file-io', 'python-loops'], kind: 'exercise', estimated_minutes: 15 },
      { id: 'csc141-ch7-04-word-freq',               slug: '04-word-freq',               title: 'Homework: Word-Frequency Report', title_zh: '作业: 词频报告', kc: ['python-file-io', 'python-strings', 'python-lists'], kind: 'homework', estimated_minutes: 45 },
    ] satisfies Omit<Lesson, 'chapter'>[],
  },
] as const;

export function findLesson(chapterSlug: string, lessonSlug: string) {
  const chapter = chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) return null;
  const lesson = chapter.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return null;
  return { chapter, lesson };
}

export function lessonPath(chapterSlug: string, lessonSlug: string) {
  return `/chapters/${chapterSlug}/${lessonSlug}/`;
}
