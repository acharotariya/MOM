<template>
    <div id="details_pane_footer" class="details-pane-redesign details-pane-footer">
        <div class="property-sheet-view"><div class="loading-boundary ">
            <div class="taskCommentsView ">
                <div class="photo-view photo-view-remix inbox-size photo-view-rounded-corners taskCommentsView-photo">
                    <div class="react-mount-node photoView-reactMount">
                        <div data-reactroot="" class="Avatar Avatar--medium Avatar--color4">
                             <span v-if="imageURlProfilePic"><img v-bind:src="imageURlProfilePic" /></span>
                             <span v-else>{{ capitalizeLetters }}</span>
                        </div>
                    </div>
                </div>
                <!--<div class="taskCommentsView-composer is-expanded">
                    <div class="taskCommentsView-textarea">
                        <noscript></noscript>
                        <textarea  class="taskCommentsView-placeholder" id="property_sheet:details_property_sheet_field:comments" tabindex="710">
                            Write a comment…
                        </div>
                    </div>-->
	                <div class="taskCommentsView-composer is-expanded">
                        <span class="taskCommentsView-textarea">
                            <textarea rows="5" cols="50"
                                contenteditable="true" 
                                v-model="commentText"
                                disable_highlighting_for_diagnostics="true" 
                                tabindex="10" 
                                class="field-description hypertext-input notranslate" 
                                id="property_sheet:details_property_sheet_field:description"
                                placeholder="Write Comment...">
                        </textarea><br> 
                    </span>
                </div>
                    <div class="taskCommentsView-toolbar">
                        <div id="details_property_sheet__new_comment_button" @click="insertComment(filteredTodo.id)" class="buttonView new-button new-primary-button buttonView--primary buttonView--default taskCommentsView-commentButton" style="" tabindex="710">
                            <span class="left-button-icon"></span>
                            <span class="new-button-text">Comment</span>
                            <span class="right-button-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
</div>
</template>
<script>
  /* eslint-disable*/
import { mapGetters } from 'vuex'
export default {
  props: ['filteredTodo'],
  data: function () {
    return {
      picker1: null,
      imageURlProfilePic: this.$store.state.userObject.image_url,
      commentText:''
    }
  },
  methods:{
        insertComment: function(taskId){
        this.$store.dispatch('insertTaskComment',{"id":this.filteredTodo.id, "comment":this.commentText, "commentBy": this.$store.state.userObject._id})
        this.commentText = ''
    }
  },
  computed: {
    capitalizeLetters: function(){
      var str = this.$store.state.userObject.email
      var firstLetters = str.substr(0,2)
      return firstLetters.toUpperCase()
    },
    ...mapGetters({
            getComment: 'getCommentById'
        }),
        getCommentByTaskId(){
            let commentList = this.getComment(this.filteredTodo.id)
            return commentList
        }
  }
}
</script>