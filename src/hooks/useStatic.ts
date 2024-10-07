// Entry component
import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';

let message: MessageInstance;
let notification: NotificationInstance;
let modal: Omit<ModalStaticFunctions, 'warn'>;

const useStaticAntdMethods =  () => {
  const staticApp  = App.useApp();
  message = staticApp.message;
  notification = staticApp.notification;
  modal = staticApp.modal;
};

export default useStaticAntdMethods;

export { message, notification, modal };