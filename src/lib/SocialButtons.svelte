<script>
  export let size = "small";

  import { bundle } from "$lib/stores";
  import { page } from "$app/stores";

  const socials = [
    { link: "twitter", ico: "fa-brands fa-twitter", name: "Twitter" },
    { link: "instagram", ico: "fab fa-instagram", name: "Instagram" },
    { link: "fbevent", ico: "fab fa-facebook", name: "Facebook" },
    { link: "substack", ico: "fa-solid fa-envelope", name: "Newsletter" },
    { link: "discord", ico: "fab fa-discord", name: "Discord" },
    { link: "telegram", ico: "fab fa-telegram", name: "Telegram" },
  ];
</script>

{#if $bundle}
  {#if size === "small"}
    <div class="flex block space-x-2 m-auto w-full justify-end">
      {#each socials as soc}
        <a
          href={$bundle.links[soc.link]}
          class="w-6 h-6 bg-white rounded-full hover:bg-utxo-gradient hover:text-white"
          target="_blank"
        >
          <i class={soc.ico} />
        </a>
      {/each}
    </div>
  {/if}
  {#if size === "normal"}
    <div class="w-auto">
      <div class="sm:flex flex-wrap gap-3 justify-end">
        {#each socials as soc}
          <div class="mr-4 sm:mr-0 inline-block sm:block hover:text-red-500">
            <a href={$bundle.links[soc.link]} class="block flex" target="_blank"
              ><i class="{soc.ico} mr-2 my-auto" />{soc.name}</a
            >
          </div>
        {/each}
      </div>
    </div>
  {/if}
{/if}
