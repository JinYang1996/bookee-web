<template>
    <div class="slots">
        slot的用法
        <slotChild>
            <template v-slot:slot-mid>
                <div class="no-name">
                    我是嵌在子组件里不具有属性名的标签ffff
                </div>
            </template>
            
        </slotChild>
    </div>
</template>

<script>
import slotChild from '@/components/student/slotChild'
export default {
    name:'slots',
    components:{
        slotChild
    },
    data(){
        return {

        }
    }
}
</script>