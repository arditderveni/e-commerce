import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { routes } from "@/lib/routes";
// import Link from "next/link";
import { ModeToggle, SidebarUser } from "../common";

/**
 * AppSidebar component renders the sidebar for the application.
 * It includes collapsible functionality, a menu with a trigger button,
 * a mode toggle, user information, and a sidebar rail.
 *
 * @component
 * @example
 * return (
 *   <AppSidebar />
 * )
 *
 * @returns The rendered sidebar component.
 */
function AppSidebar() {
  return (
    <Sidebar {...{ collapsible: "icon" }}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex justify-start">
                  <SidebarTrigger />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle iconClassName="mt-3 ml-1 w-7 h-7" />
        <SidebarUser
          {...{
            user: {
              name: "John Doe",
              email: "jdoe@test.email",
              avatar: "https://randomuser.me/api/portraits",
              id: 1,
            },
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

AppSidebar.displayName = "AppSidebar";

export default AppSidebar;
