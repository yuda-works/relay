import { Settings as SettingsIcon } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { PROVIDERS, type ProviderKey } from "@/data/providers"
import { useProviderKeys } from "@/hooks/use-provider-keys"

export function Settings() {
  const { keys, activeProvider, updateKey, updateProvider } = useProviderKeys()

  return (
    <SidebarMenuItem>
      <Dialog>
        <DialogTrigger asChild>
          <SidebarMenuButton>
            <SettingsIcon />
            <span>Settings</span>
          </SidebarMenuButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Configure your AI provider and API keys.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="flex flex-col w-full gap-6">
            <Field>
              <FieldLabel htmlFor="provider">AI Provider</FieldLabel>
              <Select
                value={activeProvider}
                onValueChange={(value) => updateProvider(value as ProviderKey)}
              >
                <SelectTrigger id="provider" className="w-full">
                  <SelectValue placeholder="Select a provider" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {PROVIDERS.map((provider) => (
                    <SelectItem key={provider.key} value={provider.key}>
                      {provider.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="apikey">API Key</FieldLabel>
              <Input
                id="apikey"
                type="password"
                value={keys[activeProvider]}
                onChange={(e) => updateKey(activeProvider, e.target.value)}
                placeholder={`Enter your ${activeProvider === "openrouter" ? "OpenRouter" : "Groq"} API key`}
              />
              <FieldDescription>
                Your key is never sent to our servers. It is used directly from your browser.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </DialogContent>
      </Dialog>
    </SidebarMenuItem>
  )
}
