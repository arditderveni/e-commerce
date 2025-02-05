import {
  ButtonHTMLAttributes,
  ChangeEvent,
  ComponentProps,
  ComponentRef,
  ComponentType,
  ElementRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
  RefObject,
} from "react";
import { ComponentPropsWithoutRef } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { loginSchema, signupSchema } from "./schemas";
import { Button, buttonVariants } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Separator } from "./components/ui/separator";
import { VariantProps } from "class-variance-authority";
import { sidebarMenuButtonVariants } from "./components/ui/sidebar";
import { TooltipContent } from "./components/ui/tooltip";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { DayPicker } from "react-day-picker";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { sheetVariants } from "./components/ui/sheet";
import { labelVariants } from "./components/ui/label";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as SelectPrimitive from "@radix-ui/react-select";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

declare global {
  //#region Common Types
  type User = {
    name: string;
    email: string;
    avatar: string;
    id: number;
    birthdate?: Date;
  };

  type BusRoute = {
    title: string;
    description: string;
    path: string;
    id: number;
  };

  type SelectOption = {
    label: string;
    value: string;
  };

  type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    colors?: string[];
    sizes: Size[];
    wishListed: boolean;
    description?: string;
    ingredients?: string[];
    features?: string[];
  };

  type SizeTypes = "S" | "M" | "L" | "";

  type Size = {
    size: SizeTypes;
    stock: number;
  };

  type FooterColumn = {
    title: string;
    links: { title: string; href: string }[];
  };

  type Brand = {
    name: string;
    image?: string;
    slug: string;
  };

  //#endregion

  //** ---------- */

  //#region Ref Types

  type SizePickerRef = RefObject<{
    size: SizeTypes;
    setSize: (size: SizeTypes) => void;
  }>;

  type QuantityButtonRef = RefObject<{
    quantity: number;
    setQuantity: (quantity: number) => void;
  }>;

  type ColorPaletteRef = RefObject<{
    color: string;
    setColor: (color: string) => void;
  }>;

  type WishHeartRef = RefObject<{
    wishListed: boolean;
    setWishListed: (value: boolean) => void;
  }>;

  type ActiveFiltersRef = RefObject<{
    activeFilters: string[];
    setActiveFilters: (filter: string) => void;
  }>;

  //#endregion

  //#region Prop Types
  type WrapperProps = {
    children: ReactNode;
    className?: string;
  };
  interface PasswordInputProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    name: Path<T> | string;
    label: string;
    description?: string;
    className?: string;
    autoComplete?: "on" | "off";
  }

  interface PasswordInputHandle {
    getValue: () => string;
    setValue: (value: string) => void;
  }

  interface DynamicInputProps extends ComponentPropsWithoutRef<"input"> {
    type: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    ariaLabel?: string;
    className?: string;
  }

  interface FormInputProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    name: Path<T> | string;
    label: string;
    description?: string;
    inputProps: DynamicInputProps;
    className?: string;
  }

  interface DynamicFormRenderParams<T extends FieldValues> {
    form: UseFormReturn<T>;
    inputs: {
      name: Path<T> | string;
      type: string;
      label: string;
      placeholder: string;
      required: boolean;
      className?: string;
    }[];
    submitHandler: (data: T) => Promise<void>;
    submitText?: string;
    className?: string;
  }

  interface ModalProps {
    children: ReactNode;
    title: string;
    // open: boolean;
    onClose?: () => void;
    FooterComp?: ReactNode;
    className?: string;
    open?: boolean;
    setOpen?: (open: boolean) => void;
  }

  interface InputProps extends React.ComponentProps<"input"> {
    ref?:
      | React.RefObject<HTMLInputElement>
      | React.RefCallback<HTMLInputElement>;
  }

  interface LabelProps
    extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
      VariantProps<typeof labelVariants> {
    ref?: React.RefObject<React.ElementRef<typeof LabelPrimitive.Root>>;
  }

  interface PopoverContentProps
    extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
    ref?: RefObject<ElementRef<typeof PopoverPrimitive.Content>>;
  }

  interface SeparatorProps
    extends ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
    ref?: RefObject<ElementRef<typeof SeparatorPrimitive.Root>>;
  }

  interface SwitchProps
    extends ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
    ref?: RefObject<ElementRef<typeof SwitchPrimitives.Root>>;
  }

  interface TooltipContentProps
    extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    ref?: RefObject<ElementRef<typeof TooltipPrimitive.Content>>;
  }

  interface ProductCardProps extends Product {
    className?: string;
    id: string;
    ref?: RefObject<HTMLDivElement>;
    wishListed: boolean;
    variant: "home" | "shop";
    addItem: (item: CartItem) => void;
  }

  interface ColorPaletteProps {
    colors: string[];
    className?: string;
    ref?: ColorPaletteRef;
  }

  interface SelectProps {
    placeholder: string;
    label?: string;
    options: SelectOption[];
    className?: string;
    onChange?: (value: string) => void;
  }

  interface StarRatingProps {
    rating: number;
    ratable: boolean;
    className?: string;
    ref?: RefObject<{
      value: number;
      setValue: (value: number) => void;
    }>;
  }

  interface SizesProps {
    sizes: Size[];
    ref?: SizePickerRef;
  }

  interface QuantityButtonProps {
    hasNoStock?: boolean;
    ref?: RefObject<{
      quantity: number;
      setQuantity: (quantity: number) => void;
    }>;
  }

  interface BannerProps {
    className?: string;
    image?: string;
    text?: string;
    button?: boolean;
    buttonText?: string;
    path?: string;
  }

  interface RedirectButtonProps {
    route: string;
    title: string;
    className?: string;
  }

  interface WishHeartProps {
    wishListed: boolean;
    className?: string;
    ref?: WishHeartRef;
  }

  interface FooterColumnProps {
    column: FooterColumn;
    className?: string;
  }

  interface HoverCardProps {
    text: string;
    children?: ReactNode;
    hoverChildren?: ReactNode;
    className?: string;
  }

  //#endregion

  //** ---------- */

  //#region Form Types
  type LoginFormData = z.infer<typeof loginSchema>;

  type SignUpFormData = z.infer<typeof signupSchema>;

  interface LoginFormProps {
    onSubmit: (data: LoginFormData) => Promise<void>;
  }

  interface SignupFormProps {
    onSubmit: (data: SignUpFormData) => Promise<void>;
  }

  interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    ref?: RefObject<HTMLDivElement>;
  }

  interface FormLabelProps
    extends ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    className?: string;
    ref?: RefObject<HTMLLabelElement>;
  }

  interface FormControlProps extends ComponentPropsWithoutRef<typeof Slot> {
    ref?: RefObject<ElementRef<typeof Slot>>;
  }

  interface FormDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    ref?: RefObject<HTMLParagraphElement>;
  }

  interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    ref?: RefObject<HTMLParagraphElement>;
  }

  //#endregion

  //** ---------- */

  //#region Sidebar Props

  type SidebarContext = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
  };

  interface SidebarProviderProps extends ComponentProps<"div"> {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    ref?: RefObject<HTMLDivElement>;
  }

  interface SidebarProps extends ComponentProps<"div"> {
    className?: string;
    children: ReactNode;
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
    ref?: RefObject<HTMLDivElement>;
  }

  interface SidebarTriggerProps extends ComponentProps<typeof Button> {
    ref?: RefObject<ElementRef<typeof Button>>;
  }

  interface SidebarRailProps extends ComponentProps<"button"> {
    ref?: RefObject<ElementRef<"button">>;
    className?: string;
  }

  interface SidebarInsetProps extends ComponentProps<"main"> {
    ref?: RefObject<HTMLDivElement>;
    className?: string;
  }

  interface SidebarInputProps extends ComponentProps<typeof Input> {
    ref?: RefObject<ElementRef<typeof Input>>;
  }

  interface SidebarHeaderProps extends ComponentProps<"div"> {
    ref?: RefObject<HTMLDivElement>;
  }

  interface SidebarFooterProps extends ComponentProps<"div"> {
    ref?: RefObject<HTMLDivElement>;
  }

  interface SidebarSeparatorProps extends ComponentProps<"div"> {
    ref?: RefObject<ElementRef<typeof Separator>>;
  }

  interface SidebarContentProps extends ComponentProps<"div"> {
    ref?: RefObject<HTMLDivElement>;
  }

  interface SidebarGroupProps extends ComponentProps<"div"> {
    ref?: RefObject<HTMLDivElement>;
  }

  interface SidebarGroupLabelProps extends ComponentProps<"div"> {
    ref?: RefObject<HTMLDivElement>;
    asChild?: boolean;
  }

  interface SidebarGroupActionProps extends ComponentProps<"button"> {
    ref?: RefObject<HTMLButtonElement>;
    asChild?: boolean;
  }

  interface SidebarMenu extends ComponentProps<"ul"> {
    ref?: RefObject<HTMLUListElement>;
  }

  interface SidebarMenuItemProps extends ComponentProps<"li"> {
    ref?: RefObject<HTMLLIElement>;
    asChild?: boolean;
  }

  interface SidebarMenuButtonProps
    extends ComponentProps<"button">,
      VariantProps<typeof sidebarMenuButtonVariants> {
    ref?: RefObject<HTMLButtonElement>;
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | ComponentProps<typeof TooltipContent>;
  }

  interface SidebarMenuActionProps extends ComponentProps<"button"> {
    ref?: RefObject<HTMLButtonElement>;
    asChild?: boolean;
    showOnHover?: boolean;
  }

  interface SidebarMenuBadgeProps extends ComponentProps<"div"> {
    ref?: RefObject<HTMLDivElement>;
    asChild?: boolean;
  }

  interface SidebarMenuSkeletonProps extends ComponentProps<"div"> {
    ref?: RefObject<HTMLDivElement>;
    showIcon?: boolean;
  }

  interface SidebarMenuSubProps extends ComponentProps<"ul"> {
    ref?: RefObject<HTMLUListElement>;
  }

  interface SidebarMenuSubItemProps extends ComponentProps<"li"> {
    ref?: RefObject<HTMLLIElement>;
  }

  interface SidebarMenuSubButtonProps extends ComponentProps<"a"> {
    ref?: RefObject<HTMLAnchorElement>;
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }

  interface SidebarGroupContentProps extends ComponentProps<"div"> {
    ref?: RefObject<HTMLDivElement>;
  }

  interface SidebarMenuProps extends ComponentProps<"ul"> {
    ref?: RefObject<HTMLUListElement>;
  }

  //#endregion

  //** ---------- */

  //#region Avatar Props

  interface AvatarProps
    extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
    ref?: RefObject<ElementRef<typeof AvatarPrimitive.Root>>;
  }

  interface AvatarImageProps
    extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
    ref?: RefObject<ElementRef<typeof AvatarPrimitive.Image>>;
  }

  interface AvatarFallbackProps
    extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
    ref?: RefObject<ElementRef<typeof AvatarPrimitive.Fallback>>;
  }

  //#endregion

  //** ---------- */

  //#region Button Props

  interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    ref?: RefObject<HTMLButtonElement>;
  }

  //#endregion

  //** ---------- */

  //#region Calendar Props

  type CalendarProps = React.ComponentProps<typeof DayPicker>;

  //#endregion

  //** ---------- */

  //#region Card Props

  interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    ref?: RefObject<HTMLDivElement>;
  }

  interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    ref?: RefObject<HTMLDivElement>;
  }

  interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    ref?: RefObject<HTMLDivElement>;
  }

  interface CardDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    ref?: RefObject<HTMLDivElement>;
  }

  interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    ref?: RefObject<HTMLDivElement>;
  }

  interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    ref?: RefObject<HTMLDivElement>;
  }

  interface CardCompProps {
    title: string;
    content: string;
    footer: ReactNode;
    className?: string;
    Icon?: ElementType;
    children?: ReactNode;
    ref?: RefObject<HTMLDivElement>;
  }

  //#endregion

  //** ---------- */

  //#region Dropdown Props
  interface DropdownMenuSubTriggerProps
    extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
    ref?: RefObject<ElementRef<typeof DropdownMenuPrimitive.SubTrigger>>;
    inset?: boolean;
  }

  interface DropdownMenuSubContentProps
    extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {
    ref?: RefObject<ElementRef<typeof DropdownMenuPrimitive.SubContent>>;
    className?: string;
  }

  interface DropdownMenuContentProps
    extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
    ref?: RefObject<ElementRef<typeof DropdownMenuPrimitive.Content>>;
    className?: string;
  }

  interface DropdownMenuItemProps
    extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
    ref?: RefObject<ElementRef<typeof DropdownMenuPrimitive.Item>>;
    className?: string;
    inset?: boolean;
  }

  interface DropdownMenuCheckboxItemProps
    extends ComponentPropsWithoutRef<
      typeof DropdownMenuPrimitive.CheckboxItem
    > {
    ref?: RefObject<ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>>;
    className?: string;
    children?: ReactNode;
    checked: boolean;
  }

  interface DropdownMenuRadioItemProps
    extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {
    ref?: RefObject<ElementRef<typeof DropdownMenuPrimitive.RadioItem>>;
    className?: string;
    children?: ReactNode;
  }

  interface DropdownMenuLabelProps
    extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
    ref?: RefObject<ElementRef<typeof DropdownMenuPrimitive.Label>>;
    className?: string;
    inset?: boolean;
  }

  interface DropdownMenuSeparatorProps
    extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {
    ref?: RefObject<ElementRef<typeof DropdownMenuPrimitive.Separator>>;
    className?: string;
  }

  interface DropdownMenuShortcutProps extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
  }
  //#endregion

  //** ---------- */

  //#region Navigation Menu Props

  interface NavigationMenuProps
    extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
    ref?: RefObject<ElementRef<typeof NavigationMenuPrimitive.Root>>;
    className?: string;
    children: ReactNode;
  }

  interface NavigationMenuListProps
    extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> {
    ref?: RefObject<ElementRef<typeof NavigationMenuPrimitive.List>>;
    className?: string;
    children?: ReactNode;
  }

  interface NavigationMenuTriggerProps
    extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> {
    ref?: RefObject<ElementRef<typeof NavigationMenuPrimitive.Trigger>>;
    className?: string;
    children?: ReactNode;
  }

  interface NavigationMenuContentProps
    extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> {
    ref?: RefObject<ElementRef<typeof NavigationMenuPrimitive.Content>>;
    className?: string;
    children?: ReactNode;
  }

  interface NavigationMenuViewPortProps
    extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> {
    ref?: RefObject<ElementRef<typeof NavigationMenuPrimitive.Viewport>>;
    className?: string;
    children?: ReactNode;
  }

  interface NavigationMenuIndicatorProps
    extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> {
    ref?: RefObject<ElementRef<typeof NavigationMenuPrimitive.Indicator>>;
    className?: string;
    children?: ReactNode;
  }
  // #endregion

  //** ---------- */

  //#region Sheet Props

  interface SheetOverlayProps
    extends ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {
    ref?: RefObject<ElementRef<typeof SheetPrimitive.Overlay>>;
    className?: string;
  }

  interface SheetContentProps
    extends ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
      VariantProps<typeof sheetVariants> {
    ref?: RefObject<ElementRef<typeof SheetPrimitive.Content>>;
  }

  type SheetHeaderProps = HTMLAttributes<HTMLDivElement>;

  type SheetFooterProps = HTMLAttributes<HTMLDivElement>;

  interface SheetTitleProps
    extends ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {
    ref?: RefObject<ElementRef<typeof SheetPrimitive.Title>>;
  }

  interface SheetDescriptionProps
    extends ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {
    ref?: RefObject<ElementRef<typeof SheetPrimitive.Description>>;
  }

  // #endregion

  //** ---------- */

  //#region Nav Menu

  interface NavItem {
    icon: ComponentType<ComponentProps<"svg">>;
    label: string;
    path: string;
    prefetch?: boolean;
  }

  interface NavItems {
    [key: string]: NavItem[];
  }
  interface NavMenuProps {
    pathname: keyof NavItems;
  }

  // #endregion

  //** ---------- */

  //#region Select Props

  interface SelectTriggerProps
    extends ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
    ref?: RefObject<ComponentRef<typeof SelectPrimitive.Trigger>>;
    className?: string;
  }

  interface SelectScrollUpButtonProps
    extends ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {
    ref?: RefObject<ComponentRef<typeof SelectPrimitive.ScrollUpButton>>;
    className?: string;
  }

  interface SelectScrollDownButtonProps
    extends ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> {
    ref?: RefObject<ComponentRef<typeof SelectPrimitive.ScrollDownButton>>;
    className?: string;
  }

  interface SelectContentProps
    extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
    ref?: RefObject<ComponentRef<typeof SelectPrimitive.Content>>;
    className?: string;
  }

  interface SelectLabelProps
    extends ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {
    ref?: RefObject<ComponentRef<typeof SelectPrimitive.Label>>;
    className?: string;
  }

  interface SelectItemProps
    extends ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
    ref?: RefObject<ComponentRef<typeof SelectPrimitive.Item>>;
    className?: string;
    value: string;
  }

  interface SelectSeparatorProps
    extends ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {
    ref?: RefObject<ComponentRef<typeof SelectPrimitive.Separator>>;
    className?: string;
  }

  //#endregion

  //#region Cart Context

  interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    size?: SizeTypes;
    image: string;
    color: string;
  }

  interface CartState {
    items: CartItem[];
    totalAmount: number;
  }

  interface CartContextProps extends CartState {
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
  }

  type CartReducerActionType =
    | "ADD_ITEM"
    | "REMOVE_ITEM"
    | "CLEAR_CART"
    | "UPDATE_ITEM";

  type CartReducerAction =
    | {
        type: "ADD_ITEM";
        item: CartItem;
      }
    | {
        type: "REMOVE_ITEM";
        id: string;
      }
    | {
        type: "CLEAR_CART";
      }
    | {
        type: "UPDATE_ITEM";
        item: CartItem;
      };

  type CartReducer = (state: CartState, action: CartReducerAction) => CartState;

  //#endregion

  //* ---------- */

  //#region Breadcrumb Props

  interface BreadcrumbItemProps extends ComponentPropsWithoutRef<"li"> {
    ref?: RefObject<HTMLLIElement>;
    className?: string;
  }

  interface BreadcrumbLinkProps extends ComponentPropsWithoutRef<"a"> {
    ref?: RefObject<HTMLAnchorElement>;
    className?: string;
    asChild?: boolean;
  }

  interface BreadcrumbListProps extends ComponentPropsWithoutRef<"ol"> {
    ref?: RefObject<HTMLOListElement>;
    className?: string;
  }

  interface BreadcrumbPageProps extends ComponentPropsWithoutRef<"span"> {
    ref?: RefObject<HTMLSpanElement>;
    className?: string;
  }

  interface BreadcrumbProps extends ComponentPropsWithoutRef<"nav"> {
    ref?: RefObject<HTMLElement>;
    separator?: ReactNode;
  }

  //#endregion

  //* ---------- */

  //#region Carousel

  type CarouselApi = UseEmblaCarouselType[1];
  type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
  type CarouselOptions = UseCarouselParameters[0];
  type CarouselPlugin = UseCarouselParameters[1];

  type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
  };

  interface CarouselCompProps
    extends HTMLAttributes<HTMLDivElement>,
      CarouselProps {
    ref?: RefObject<HTMLDivElement>;
  }

  interface Carousel extends CarouselCompProps {
    items: ReactNode[];
    itemClassName?: string;
  }

  interface CarouselContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    ref?: RefObject<HTMLDivElement>;
  }

  interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    ref?: RefObject<HTMLDivElement>;
  }

  interface CarouselButtonProps extends ComponentProps<typeof Button> {
    ref?: RefObject<HTMLButtonElement>;
  }

  type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
  } & CarouselProps;

  //#endregion

  //* ---------- */

  //#region Accordion

  interface AccordionItemProps
    extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
    ref?: RefObject<ComponentRef<typeof AccordionPrimitive.Item>>;
  }

  interface AccordionTriggerProps
    extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    ref?: RefObject<ComponentRef<typeof AccordionPrimitive.Trigger>>;
  }

  interface AccordionContentProps
    extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
    ref?: RefObject<ComponentRef<typeof AccordionPrimitive.Content>>;
  }

  type AccordionProps = {
    className?: string;
    collapsible?: boolean;
    items: {
      trigger: string | ReactNode;
      content: string | ReactNode;
    }[];
    type?: "single" | "multiple";
    ref?: RefObject<ComponentRef<typeof AccordionPrimitive.Root>>;
  } & ComponentProps<typeof AccordionPrimitive.Root>;

  //#endregion
}
