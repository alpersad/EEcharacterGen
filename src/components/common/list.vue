<template>
  <Listbox v-model="selectedPerson">
    <ListboxButton>{{ selectedPerson.name }}</ListboxButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <ListboxOptions>
        <!-- Use the `active` state to conditionally style the active option. -->
        <!-- Use the `selected` state to conditionally style the selected option. -->

        <ListboxOption
          as="template"
          v-slot="{ active, selected }"
          v-for="person in people"
          :key="person"
          :value="person"
        >
          <li
            :class="{
              'bg-blue-500 text-white': active,
              'bg-white text-black': !active
            }"
          >
            <CheckIcon v-show="selected" />
            {{ person.name }}
          </li>
        </ListboxOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon
  },

  setup() {
    const people = [
      { id: 1, name: "Durward Reynolds" },
      { id: 2, name: "Kenton Towne" },
      { id: 3, name: "Therese Wunsch" },
      { id: 4, name: "Benedict Kessler" },
      { id: 5, name: "Katelyn Rohan" }
    ];
    const selectedPerson = ref(people[0]);

    return {
      people,
      selectedPerson
    };
  }
};
</script>
