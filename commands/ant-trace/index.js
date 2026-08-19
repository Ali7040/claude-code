import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default { isEnabled: () => false, isHidden: true, name: 'stub' };

