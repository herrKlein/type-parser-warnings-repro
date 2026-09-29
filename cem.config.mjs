import { getTsProgram, typeParserPlugin } from '@wc-toolkit/type-parser';

const globs = ['src/components/**/*.ts'];

export default {
  globs,
  exclude: ['src/stories/**'],
  outdir: './',
  litelement: true,
  overrideModuleCreation: ({ ts, globs }) => {
    const program = getTsProgram(ts, globs, 'tsconfig.json');
    return program.getSourceFiles().filter(sf => sf.fileName.includes('/src/components/'));
  },
  plugins: [typeParserPlugin()]
};
