import React from "react";
import PropTypes, { InferProps } from "prop-types";
declare type InferPropType<PropTypes, DefaultProps = {}, Props = InferProps<PropTypes>> = {
    [Key in keyof Props]: Key extends keyof DefaultProps ? Props[Key] | DefaultProps[Key] : Props[Key];
};
declare type ForwardedRefType = {
    openModal: () => void;
    closeModal: () => void;
};
export declare const Modal: React.ForwardRefExoticComponent<InferPropType<{
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    options: PropTypes.Requireable<PropTypes.InferProps<{
        openingDuration: PropTypes.Requireable<number>;
        closingDuration: PropTypes.Requireable<number>;
        zIndex: PropTypes.Requireable<number>;
        isOverlay: PropTypes.Requireable<boolean>;
        isOverlayClosing: PropTypes.Requireable<boolean>;
        overlayPadding: PropTypes.Requireable<string>;
        overlayBackground: PropTypes.Requireable<string>;
        isPanelCloseButton: PropTypes.Requireable<boolean>;
        isPanelRestrictedSize: PropTypes.Requireable<boolean>;
        panelRestrictedWidth: PropTypes.Requireable<string>;
        panelRestrictedHeight: PropTypes.Requireable<string>;
        panelWidth: PropTypes.Requireable<string>;
        panelHeight: PropTypes.Requireable<string>;
        panelBorderRadius: PropTypes.Requireable<string>;
        panelBorder: PropTypes.Requireable<string>;
        panelBackground: PropTypes.Requireable<string>;
        panelBoxShadow: PropTypes.Requireable<string>;
        panelPadding: PropTypes.Requireable<string>;
    }>>;
    onOpenStart: PropTypes.Requireable<(...args: any[]) => any>;
    onOpenEnd: PropTypes.Requireable<(...args: any[]) => any>;
    onCloseStart: PropTypes.Requireable<(...args: any[]) => any>;
    onCloseEnd: PropTypes.Requireable<(...args: any[]) => any>;
}, {
    options: {
        openingDuration: number;
        closingDuration: number;
        zIndex: number;
        isOverlay: boolean;
        isOverlayClosing: boolean;
        overlayPadding: string;
        overlayBackground: string;
        isPanelCloseButton: boolean;
        isPanelRestrictedSize: boolean;
        panelRestrictedWidth: string;
        panelRestrictedHeight: string;
        panelWidth: string;
        panelHeight: string;
        panelBorderRadius: string;
        panelBorder: string;
        panelBackground: string;
        panelBoxShadow: string;
        panelPadding: string;
    };
    onOpenStart: () => void;
    onOpenEnd: () => void;
    onCloseStart: () => void;
    onCloseEnd: () => void;
}, PropTypes.InferProps<{
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    options: PropTypes.Requireable<PropTypes.InferProps<{
        openingDuration: PropTypes.Requireable<number>;
        closingDuration: PropTypes.Requireable<number>;
        zIndex: PropTypes.Requireable<number>;
        isOverlay: PropTypes.Requireable<boolean>;
        isOverlayClosing: PropTypes.Requireable<boolean>;
        overlayPadding: PropTypes.Requireable<string>;
        overlayBackground: PropTypes.Requireable<string>;
        isPanelCloseButton: PropTypes.Requireable<boolean>;
        isPanelRestrictedSize: PropTypes.Requireable<boolean>;
        panelRestrictedWidth: PropTypes.Requireable<string>;
        panelRestrictedHeight: PropTypes.Requireable<string>;
        panelWidth: PropTypes.Requireable<string>;
        panelHeight: PropTypes.Requireable<string>;
        panelBorderRadius: PropTypes.Requireable<string>;
        panelBorder: PropTypes.Requireable<string>;
        panelBackground: PropTypes.Requireable<string>;
        panelBoxShadow: PropTypes.Requireable<string>;
        panelPadding: PropTypes.Requireable<string>;
    }>>;
    onOpenStart: PropTypes.Requireable<(...args: any[]) => any>;
    onOpenEnd: PropTypes.Requireable<(...args: any[]) => any>;
    onCloseStart: PropTypes.Requireable<(...args: any[]) => any>;
    onCloseEnd: PropTypes.Requireable<(...args: any[]) => any>;
}>> & React.RefAttributes<ForwardedRefType>>;
export default Modal;
