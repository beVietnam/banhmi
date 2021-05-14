import s from "./sidebarFooter.module.css";
import { Icon, DivEm } from "@moai/core";
import * as outline from "@banhmi/icon/outline";

const FooterItem = (props: { children: string; type: any }): JSX.Element => {
	return (
		<div className={s.footerItems}>
			<span className={s.icon}>
				<Icon display="inline" component={props.type} />
			</span>
			<span className={s.footerItemsTitle}>{props.children}</span>
		</div>
	);
};

export const SidebarFooter = (): JSX.Element => {
	return (
		<div>
			<DivEm />
			<div className={s.footer}>
				<FooterItem type={outline.Tool}>Cài đặt</FooterItem>
				<FooterItem type={outline.User}>Phân quyền</FooterItem>
				<FooterItem type={outline.Noti}>Thông báo</FooterItem>
				<FooterItem type={outline.Lock}>Thay đổi mật khẩu</FooterItem>
				<FooterItem type={outline.Logout}>Đăng xuất</FooterItem>
			</div>
		</div>
	);
};

export default SidebarFooter;
