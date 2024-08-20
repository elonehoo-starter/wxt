import type { UseAsyncStateOptions } from '@vueuse/core'
import { storage } from 'wxt/storage'
import type { StorageItemKey } from 'wxt/storage'

export default function<
  T extends StorageValue,
  Shallow extends boolean = true,
>(
  key: StorageItemKey,
  initialValue?: T,
  opts?: UseAsyncStateOptions<Shallow, T | null>,
) {
  const { state, ...asyncState } = useAsyncState<T | null, [], Shallow>(
    () => storage.getItem(key),
    initialValue ?? null,
    opts,
  )

  storage.getItem(key).then((value) => {
    if (value === null && initialValue !== undefined) {
      state.value = initialValue
    }
  })

  storage.watch(key, (value) => {
    state.value = value as any
  })

  return {
    // Use a writable computed ref to write updates to storage
    state: computed({
      get() {
        return state.value
      },
      set(newValue) {
        void storage.setItem(key, newValue!)
        state.value = newValue
      },
    }),
    ...asyncState,
  }
}

type StorageValue = null | string | number | boolean | object | any
