import useWebExtensionStorage from '~/composables/useWebExtensionStorage'

export const { state: storageDemo } = useWebExtensionStorage('local:webext-demo', 'Storage Demo')
