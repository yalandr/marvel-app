<template>
    <div class="pagination flex center just-center">
        <div 
            class="page-number flex center just-center"
            :class="{
                    'current' : currentPage === page
                }"
            v-for="page in totalPages" 
            :key="page"
            @click="switchPage(page)" 
        >
            {{ page }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppPagination',
    props: {
        totalPages: Number,
        page: Number,
        currentPage: Number
    },
    methods: {
        switchPage(page) {
            this.$emit('switchPage', page);
        }
    }
}
</script>

<style>
.pagination {
    padding: 1rem;
    border-radius: 5px;
    backdrop-filter: blur(6px);
    margin: 1rem 0;
    background-color: rgba(0,0,0,.5);
}
.page-number {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 .2rem .2rem .2rem;
    background-color: #000;
    font-size: 11px;
    transition: .2s
}
.page-number:hover {
    background-color: #111;
}
.page-number.current {
    background-color: rgb(62, 128, 249);
}
</style>