// URL格式化
const formatURL = (props: any, v: any, key?: string) => {
  let FILE_ID = '';
  let FILE_URL = '';
  const ERROR_MSG = `${v._vh_filename || '图片'} 上传失败`;
  try {
    FILE_ID = v.data?.link?.split('/').slice(-1)[0] || v.id || v.data?.id || '';
    FILE_URL = v.data?.link || '';
  } catch { }
  if (key == 'md') {
    return FILE_URL ? `![${v._vh_filename}](${FILE_URL})` : ERROR_MSG;
  }
  return FILE_URL || ERROR_MSG;
};

export { formatURL }
